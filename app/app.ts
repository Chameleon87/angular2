import {Component} from 'angular2/core';
import { Home } from './app/home/Home';

@Component({
    selector: 'app',
    templateUrl: './app/home/home.html',
})

export class App { 
    public contact = {firstName:"Jesse", lastName:"Hodge", email:"Jessehodge1987@gmail.com", phone:"512-412-9170"};
}
