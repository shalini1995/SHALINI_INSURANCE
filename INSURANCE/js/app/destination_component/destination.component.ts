import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AfterViewInit } from '@angular/core';
import { Router }   from '@angular/router';



import { DestinationComponent }   from './destination.component';
import { HotelComponent }   from '../hotel_component/hotel.component';


import {Citydetails} from './city.service';

declare var $:JQueryStatic; 

@Component({
  selector: '',
  templateUrl: './app/destination_component/destination.component.html',
   styleUrls : ['app/destination_component/destination.component.css'],
   providers : [Citydetails]
})

export class DestinationComponent implements AfterViewInit{ 
    public cityname;
    constructor(cityDetails:Citydetails, router:Router )
    {
       this.router = router;
       this.cityDetails = cityDetails;
    }
 onMove()
 {
   /* alert("dsfsdf");*/
    this.router.navigate(['/new']);
 }
   onSelect($event, city)
    {
     let cityname = this.city;
         this.cityDetails.setCity(city);
    }
 ngAfterViewInit(){ 

  
 $(document).foundation()


 }}