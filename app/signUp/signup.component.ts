import {Component} from 'angular2/core';
import {ngForm} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
	templateUrl:'./app/signUp/signUp.html',
	directives: [ROUTER_DIRECTIVES]
})
export class SignupComponent{
	createAccount(event,username,password){
		console.log(username);
	}
}