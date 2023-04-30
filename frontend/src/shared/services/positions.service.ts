import {Inject, Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Position} from "../models/Position";
import {IPositionsApiService, IPositionsApiServiceToken} from "../interfaces/IPositionsApiService";

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  private _positions: Map<number, Position> = new Map();
  private _positions$ = new BehaviorSubject<Map<number, Position>>(this._positions);
  private _initialized = false;

  constructor(
    @Inject(IPositionsApiServiceToken)
    private positionsApiService: IPositionsApiService
  ) {
  }

  get positions$() {
    if (!this._initialized) {
      this.initialize();
    }
    return this._positions$.asObservable();
  }

  getPositionById(id: number): Position | undefined {
    const position = this._positions.get(id);
    if (position === undefined) {
      throw new Error(`No position by this id: , ${id}`);
    } else {
      return position;
    }
  }

  private initialize() {
    this._initialized = true;
    this.positionsApiService.getAll().subscribe(
      positions => {
        this._positions = new Map(positions.map(i => [i.id, i]));
        this._positions$.next(this._positions);
      },
      error => {
        console.error('Failed to fetch positions:', error);
      }
    );
  }
}
