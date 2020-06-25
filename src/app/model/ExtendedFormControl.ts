import {AbstractControlOptions, AsyncValidatorFn, FormControl, ValidatorFn,} from '@angular/forms';

export class ExtendedFormControl extends FormControl {
  private _placeholder: string;

  // tslint:disable-next-line:max-line-length
  constructor(
    formState?: any,
    placeholder?: string,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(formState, validatorOrOpts, asyncValidator);
    this._placeholder = placeholder;
  }

  get placeholder(): string {
    return this._placeholder;
  }

  set placeholder(value: string) {
    this._placeholder = value;
  }
}
