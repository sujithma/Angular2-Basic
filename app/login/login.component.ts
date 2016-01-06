import {Component} from 'angular2/core';
import {RouterConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NgForm}    from 'angular2/common';
@Component({
	templateUrl: `./app/login/login.html`
	directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {

	onSubmit (event,username,password){
		console.log("hii");
		console.log(username);
	}
}