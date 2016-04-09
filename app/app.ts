import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
//import { Routes, APP_ROUTES } from './routes.config';
import {HTTP_PROVIDERS} from 'angular2/http';
import { Home } from './home/Home';

@Component({
    selector: 'app',
    templateUrl: './home/home.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: '/', name: 'Home', component: Home, useAsDefault: true }    
])

export class App { 
    public contact = {firstName:"Jesse", lastName:"Hodge", email:"Jessehodge1987@gmail.com", phone:"512-412-9170"};
}
