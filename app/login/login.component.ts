import {Component} from 'angular2/core';
import {RouterConfig, ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
	templateUrl: `./app/login/login.html`
	directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {
	public model;
	onSubmit(){
		console.log("hii");
	}
}