import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: ` 
    <div>
    <h3>{{contact.firstName}} {{contact.lastName}}</h3>
    <p>Email address: {{contact.email}}</p>
</div>
`,
})
export class AppComponent { 
    public contact = {firstName:"Jesse", lastName:"Hodge", email:"Jessehodge1987@gmail.com", phone:"512-412-9170"};
}
