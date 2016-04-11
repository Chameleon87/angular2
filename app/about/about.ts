import {Component} from 'angular2/core';

@Component({
    selector:'about',
    templateUrl: '../app/about/about.html'
})

export class About{
    public contact = {firstName:"Jesse", lastName:"Hodge", email:"Jessehodge1987@gmail.com", phone:"512-412-9170"};
}