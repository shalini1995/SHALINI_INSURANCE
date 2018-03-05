import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Router }   from '@angular/router';


import {Citydetails} from './city.service';
import {Hoteldetails} from './hotel.service';
import {Apoorvadetails} from './apoorva.service';
declare var $:JQueryStatic; 

@Component({
  selector: '',
  templateUrl: './app/hotel_component/hotel.component.html',
  styleUrls : ['app/hotel_component/hotel.component.css'],
   providers : [Citydetails, Hoteldetails]
})

export class HotelComponent implements AfterViewInit{
public data; 
public hotelDetails;
public booked=[];
constructor(cityDetails:Citydetails, hotelDetails:Hoteldetails, router:Router)
    {
       this.cityDetails = cityDetails;
       this.data = cityDetails.getCity();
       this.hotelDetails = hotelDetails.getDataname();
       this.router = router;
    }   
    onLoad()
          {
                           let showpopup=false;
                           let hiddenpopup=true;
                           let showlayer=false;
                           let hiddenlayer=true;
            let k=window.confirm("Are you sure to continue?");
                  if(k)
                  {       this.showlayer=true;
                          this.showpopup=true;
                  }
                }
                onPop()
              {
               this.showlayer=false;
               this.showpopup=false;
                 } 
 ngAfterViewInit() {
         console.log(this.cityDetails);
         console.log(this.hotelDetails);
         for (var i = 0; i < this.hotelDetails.length; ++i) {
           if(this.hotelDetails[i].cityname==this.data)
           {
             this.booked.push(this.hotelDetails[i]);
           }
         }
     }
  getdata(name)
  {
    console.log(name);
    this.cityDetails.setHotel(name);
    this.router.navigate (['/apoorva']);
  } 
}