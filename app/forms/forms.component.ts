import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {Profile} from '../models/profile'

@Component({
    selector: 'my-form',
    templateUrl: '../app/forms/MyForm.html'
})

export class Form{

    model = new Profile(1, 'Jesse', 'Hodge', '512-412-9170');

    submitted = false;

    onsubmit() { this.submitted =  true }
}
