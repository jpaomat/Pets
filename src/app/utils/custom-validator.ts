import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

function isEmptyIputValue(value: any): boolean {
    return value == null || ("" + value).trim().length === 0
}

export class CustomValidators {
    static isNumeric(control: AbstractControl): ValidationErrors | null {
        return /^[0-9]*$/.test(control.value) || (""+control.value)=="" ? null : { 'isNumeric': true };
    }
    static isEmail(control: AbstractControl): ValidationErrors | null {
        return /\w+@\w+\.\w{2,10}/.test(control.value) || (""+control.value)=="" ? null : { 'isEmail': true };
    }
    static isRequired(control: AbstractControl): ValidationErrors | null {
        return !isEmptyIputValue(control.value) ? null : { 'isRequired': true }
    }
    static isRanged(min: Number, max: Number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            return (("" + control.value).trim().length >= min && ("" + control.value).trim().length <= max) || (""+control.value)=="" ? null : { 'isRanged': true };
        }
    }
    static isCharValid(regexp: RegExp): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            return regexp.test(control.value) || (""+control.value)=="" ? null : { 'isCharValid': true }
        }
    }
}