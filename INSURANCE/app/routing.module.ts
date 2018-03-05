import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app_component/app.component';
import { SignupComponent }   from './signup_component/sign-up.component';
import { HomeComponent }   from './home_component/home.component';
import { DestinationComponent }   from './destination_component/destination.component';
import { HotelComponent }   from './hotel_component/hotel.component';
import { ApoorvaComponent }   from './apoorva_component/apoorva.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
  				      {
				        path: '',
				        component: HomeComponent
				      },
				      {
				        path: 'sign-up',
				        component: SignupComponent
				      },
				      {
				        path: 'destination',
				        component: DestinationComponent,
				      },
				      {
				        path: 'new',
				        component: HotelComponent,
				      },
				      {
				      	path:'apoorva',
				      	component:ApoorvaComponent,
				      }
			 	   ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}