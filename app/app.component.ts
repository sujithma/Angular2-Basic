import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SignupComponent} from './signUp/signup.component';
@Component({
	selector: 'my-app',
	template:	'<router-outlet></router-outlet>',
	directives:	[ROUTER_DIRECTIVES] 
})
@RouteConfig([
	{path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true},
	{ path: '/dashboard', name: 'Dashboard', component: DashboardComponent },
	{path: '/signup', name: 'Signup', component: SignupComponent}
	

])
export class AppComponent { }