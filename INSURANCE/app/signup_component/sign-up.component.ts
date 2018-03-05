import { Component } from '@angular/core';

import { AfterViewInit } from '@angular/core';
import { Router }   from '@angular/router';
declare var $:JQueryStatic; 

@Component({
  selector: 'sign-up',
  templateUrl: './app/signup_component/sign-up.component.html',
  styleUrls : ['app/signup_component/sign-up.component.css']
})

export class SignupComponent implements AfterViewInit{ 
constructor(router:Router)
{
	this.router = router;
}
Retrive(Regnum,Regpass,Regpwd)
{
	let pas=this.Regpass;
	let passs=this.Regpwd;
	var numpattern = /[0-9]{10}/;
	var re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
	/*console.log(this.Regpass);
	console.log(this.Regpwd);*/
	if(numpattern.test(this.Regnum))
	{
		if(re.test(pas))
		{
			if(pas.localeCompare(passs))
			{
				alert("The Re-typed password doesn't match with your password");
			}
			else
			{
			this.router.navigate(['/']);
    		}
		}
		else
		{
			alert("password should contain atleast one number and one special character and length should be greater than 6");
		}
    }
}
 ngAfterViewInit() {
 $(document).foundation()


 } 
