import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import { Home } from '../app/home/home.component';
import { About } from '../app/about/about';
import { Contact } from '../app/contact/contact';

@Component({
    selector: 'app',
    styles: [`
        nav li {
            display: inline;
        }
    `],
    template: `
    <nav>
        <ul>
            <li><a [routerLink]="['Home']">Home</a></li>
            <li><a [routerLink]="['About']">About</a></li>
            <li><a [routerLink]="['Contact']">Contact</a></li>
        </ul>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

    @RouteConfig([
        { path: '/home', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/contact', name: 'Contact', component: Contact }
])

export class App { 
    
}
