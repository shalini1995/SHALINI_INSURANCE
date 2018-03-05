import { Component } from '@angular/core';
import { AppComponent }   from './app.component';
import { AfterViewInit } from '@angular/core';
declare var $:JQueryStatic; 

@Component({
  selector: 'my-app',
  templateUrl: './app/app_component/app.component.html',
  styleUrls : ['app/app_component/app.component.css'],
})

export class AppComponent implements AfterViewInit{ 
 ngAfterViewInit() {
 $(document).foundation()


 } 

