import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app_component/app.component';
import { SignupComponent }   from './signup_component/sign-up.component';
import { HomeComponent }   from './home_component/home.component';
import { DestinationComponent }   from './destination_component/destination.component';
import { HotelComponent }   from './hotel_component/hotel.component';
import { ApoorvaComponent }   from './apoorva_component/apoorva.component';


import {Userdetails} from './home_component/userdetails.service';
import {Citydetails} from './destination_component/city.service';
import {Hoteldetails} from './hotel_component/hotel.service';
import {Apoorvadetails} from './apoorva_component/apoorva.service';

import { AppRoutingModule } from './routing.module';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
  				  AppRoutingModule ],
  declarations: [ AppComponent, SignupComponent, HomeComponent, DestinationComponent, HotelComponent, ApoorvaComponent],
  bootstrap:    [ AppComponent ],
  providers : [Userdetails, Citydetails, Hoteldetails, Apoorvadetails]
})
export class AppModule { }
