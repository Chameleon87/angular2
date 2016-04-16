import {Component} from 'angular2/core';
import {
    ControlGroup,
    FormBuilder,
    FORM_DIRECTIVES,
    NgForm,
    Validators
} from 'angular2/common';

import {Profile} from '../models/profile'

@Component({
    selector: 'login-page',
    templateUrl: '../app/forms/forms.html'
})

export class Form{

    loginForm: ControlGroup; 

    constructor(fb: FormBuilder) {
        this.loginForm = fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    }
    doLogin(event) {
        console.log(this.loginForm.value);
        event.preventDefault();
    }
}
