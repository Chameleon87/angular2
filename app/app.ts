import {Component} from 'angular2/core';
import { Nav } from '../app/nav/nav';
import { Home } from '../app/home/home';

@Component({
    selector: 'app',
    templateUrl: 'index.html',
    directives: [Home, Nav]   
})

export class App { 
    public contact = {firstName:"Jesse", lastName:"Hodge", email:"Jessehodge1987@gmail.com", phone:"512-412-9170"};
}
