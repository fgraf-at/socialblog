import { Component, OnInit } from '@angular/core';

import { ExtendedFormControl } from '../../model/ExtendedFormControl';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../authorization/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    public formGroup: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.authService.clearAuthData();
        this.formGroup = this.formBuilder.group({
            email: new ExtendedFormControl('', 'E-Mail', [
                Validators.required,
                Validators.email,
            ]),
            password: new ExtendedFormControl('', 'Password', [
                Validators.required,
            ]),
        });
    }

    getEmail(): ExtendedFormControl {
        return <ExtendedFormControl>this.formGroup.get('email');
    }

    getPassword(): ExtendedFormControl {
        return <ExtendedFormControl>this.formGroup.get('password');
    }

    onSubmit() {
        this.authService.createUser(
            this.getEmail().value,
            this.getPassword().value
        );
    }
}
