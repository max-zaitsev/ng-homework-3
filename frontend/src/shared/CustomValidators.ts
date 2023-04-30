import {AbstractControl, ValidatorFn} from "@angular/forms";
import {CountriesService} from "./services/countries.service";


export class CustomValidators {

  constructor(private countriesService: CountriesService) {
  }

  static maxLengthValidator(context: {requiredLength: string}): string {
    return `Max length — ${context.requiredLength}`;
  }

  static minLengthValidator(context: {requiredLength: string}): string {
    return `Min length — ${context.requiredLength}`;
  }

  static minValidator(context: {min: string}): string {
    return `Min value — ${context.min}`;
  }

  static maxValidator(context: {max: string}): string {
    return `Max value — ${context.max}`;
  }

}
