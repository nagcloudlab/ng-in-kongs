import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const confirmEmailValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const email = control.get('email')
    const cemail = control.get('cemail')
    console.log(email?.value);
    console.log(cemail?.value);
    return email?.value !== cemail?.value ? { emailMatch: true } : null;
};