import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subject, Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {catchError, debounceTime, filter, map, startWith, switchMap, takeUntil} from "rxjs/operators";
import {CountriesService} from "../../../../../shared/services/countries.service";
import {Country} from "../../../../../shared/models/Country";
import {TuiStringHandler} from "@taiga-ui/cdk";
import {TUI_VALIDATION_ERRORS} from "@taiga-ui/kit";
import {CustomValidators} from "../../../../../shared/CustomValidators";
import {CurrenciesService} from "../../../../../shared/services/currencies.service";


@Component({
  selector: 'cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.less'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Field is required',
        maxlength: CustomValidators.maxLengthValidator,
        minlength: CustomValidators.minLengthValidator,
        min: CustomValidators.minValidator,
        max: CustomValidators.maxValidator,
        email: 'Email is invalid'
      },
    }]
})
export class CartFormComponent implements OnInit{
  constructor(
    public countriesService: CountriesService,
    public currenciesService: CurrenciesService) {
  }

  private valueChangedSubscription!: Subscription;


  form = new FormGroup({
    countryInput: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
    addressInput: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
    nameInput: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
    emailInput: new FormControl(null, [Validators.required, Validators.maxLength(100), Validators.email])
  });

  ngOnInit() {
    this.valueChangedSubscription = this.form.valueChanges.subscribe(
      value => {
        this.onCountryChange(value.countryInput);
      })
  }

  submit(): void {
    this.form.reset();
  }

  onCountryChange(searchQuery: Country | null): void {
    if(searchQuery !== null) {
      const currency = searchQuery.currency;
      this.currenciesService.setCurrentCurrency(currency);
    }
  }


  readonly stringify = (countryItem: Country): string => countryItem.name;

  readonly strictMatcher = (
    item: Country,
    matchValue: string,
    stringify: TuiStringHandler<Country>,
  ): boolean => item.name === matchValue;

}
