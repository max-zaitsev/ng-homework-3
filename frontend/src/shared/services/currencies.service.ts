import {Injectable} from "@angular/core";
import {LocalStorageService} from "./localStorageService";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, filter, map} from "rxjs/operators";
import {Currency} from "../models/Currency";

const host = 'https://api.apilayer.com/exchangerates_data/latest';

const myHeaders = new HttpHeaders().set('apikey', 'MbgtfQpBOKZLNV6kk8XJO1BJ49Zb0zCb');


@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
constructor(private localStorageService: LocalStorageService,
            private httpClient: HttpClient) {
  this.initialize();
}

private _currencies: Map<string , number> = new Map<string, number>();
private _currentCurrency: Currency = {
  code: 'USD',
  exchangeRate: 1
}

private initialize() {
  const localStorageCurrencies = this.localStorageService.getData('currencies');
  if (localStorageCurrencies) {
    const currenciesObj = JSON.parse(localStorageCurrencies);
    this._currencies = new Map(Object.entries(currenciesObj));
  }
}
setCurrentCurrency(code: string) :void {
  const fromLocal = this._currencies.get(code);
  if(fromLocal){
    this._currentCurrency = {
      code: code,
      exchangeRate: fromLocal
    }
    return;
  }
  this.searchRate(code).subscribe((rate) => {
    if (rate === undefined) {
      throw new Error(`No rate for this code: ${code}`)
    }
    this._currencies.set(code, rate);
    this.localStorageService.saveData('currencies', JSON.stringify(Array.from(this._currencies.entries())))
    this._currentCurrency = {
      code: code,
      exchangeRate: rate
    }
    return;
  })
}

get currentCurrency(): Currency {
  return this._currentCurrency;
}

private searchRate(code: string): Observable<number | undefined> {
  return this.httpClient.get<any>
  (`${host}?symbols=${code}&base=USD`,  {
    headers: myHeaders
    }
    ).pipe(
    filter(response => response.success),
    map(response => {
      const values = Object.values(response.rates);
      if (typeof values[0] === "number") {
        return values[0];
      }
      return;
    }),
  )
}

}
