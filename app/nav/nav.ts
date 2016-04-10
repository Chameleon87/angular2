import {Component} from 'angular2/core';

@Component ({
    selector: 'nav',
    templateUrl: '../app/nav/nav.html',
    styles: [`
    li {
        display: inline;
    }
    nav {
        background-color: black;
    }`]
})

export class Nav {
    
}