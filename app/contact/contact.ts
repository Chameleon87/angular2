import {Component} from 'angular2/core';
import { Form } from '../forms/forms.component';

@Component({
    selector: 'contact',
    templateUrl: '../app/contact/contact.html',
    directives: [Form]
})

export class Contact{
    public contact = {firstName:"Jesse", lastName:"Hodge", email:"Jessehodge1987@gmail.com", phone:"512-412-9170"};
}