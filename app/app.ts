import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';

import { Home } from '../app/home/home.component';

@Component({
    selector: 'app',
    directives: [Home],
    template: `
    <nav>
        <ul>
            <li><a router-link="home">Home</a></li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    <main>
        <router-outlet></router-outlet>
    </main>
    `,
    styles: `
    li {
        display: inline;
    }`
})

export class App { 
    public contact = {firstName:"Jesse", lastName:"Hodge", email:"Jessehodge1987@gmail.com", phone:"512-412-9170"};
}
