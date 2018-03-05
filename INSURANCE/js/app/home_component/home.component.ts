import { Component , EventEmitter} from '@angular/core';
import { HomeComponent }   from './home.component';

import {NgForm} from '@angular/forms';
import { AfterViewInit } from '@angular/core';
import { Router }   from '@angular/router';

import {Userdetails} from './userdetails.service';
declare var $:JQueryStatic; 

@Component({
  selector: '',
  templateUrl: './app/home_component/home.component.html',
   styleUrls : ['app/home_component/home.component.css'],
   providers : [Userdetails]
})

export class HomeComponent implements AfterViewInit{ 
constructor(userDetails:Userdetails, router:Router)
{
	this.userDetails = userDetails.getData();
	this.router = router;
}
 ngAfterViewInit(){ }
onValidate(number, pwd)
{
	for (var i in this.userDetails)
	{
		if(this.userDetails[i].num == number)
		{
			 if(this.userDetails[i].pass == pwd)
			 {
		        this.router.navigate(['/destination']);
		      }
              else
			  {
				   alert("LOG-IN WITH PROPER CREDENTIALS");
			   }
		}
}





  
