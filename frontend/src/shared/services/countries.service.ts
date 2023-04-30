import {Injectable, OnInit} from "@angular/core";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Country} from "../models/Country";

const host = 'https://restcountries.com/v2/all';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  countries: Country[] = [];

  constructor(
    private httpClient: HttpClient
  ) {
    this.initialize();
  }


  initialize() {
    if (this.countries.length > 0) {
      return;
    }
    this.httpClient.get<any[]>(host).pipe(
      map(countries => countries.filter(
          country => {
            return (country.name && country.currencies?.at(0)?.code)
          }
        ).map(country => {
          return {name: country.name, currency: country.currencies[0].code}
        })
      )
    ).subscribe(
      countries => {
        this.countries = countries;
      }
    )
  }

}
