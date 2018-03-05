import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Router }   from '@angular/router';
import {Apoorvadetails} from './apoorva.service';
import {Citydetails} from './city.service';
/*import {CORE_DIRECTIVES} from 'angular2/common';
import {NgIf} from 'angular2/common';*/
declare var $:JQueryStatic; 

@Component({
  selector: '',
  templateUrl: './app/apoorva_component/apoorva.component.html',
  styleUrls : ['app/apoorva_component/apoorva.component.css'],
   providers : [Apoorvadetails,Citydetails]
})

export class ApoorvaComponent implements AfterViewInit
{
      public hotelDetails;
      public booked=[];
      public apoorvaDetails;
      public name;
      public hotelname;
      constructor(apoorvaDetails:Apoorvadetails, cityDetails:Citydetails)
          {
             this.apoorvaDetails = apoorvaDetails.getHotelname();
             this.hotelname = cityDetails.getHotel();
          } 
           
          onDirect()
          {
            let totalAmount = 0;
            let roomCount=$(".roomCount");
           
              for (var i = 0; i < roomCount.length; ++i) 
              {
                console.log(roomCount[i]);

                if($(roomCount[i]).val()!="")
                {
                  /*let roomType=$(roomCount[i]).attr("id");*/
                  let roomCost=($(roomCount[i]).parent().prev().html());

                  console.log(roomCost);
                  
                  roomCost=parseInt(roomCost.substr(3,roomCost.length));
                  let total=parseInt($(roomCount[i]).val())*roomCost;
                  totalAmount+=total;
                  $(".totalAmount").text("Rs."+parseInt(totalAmount));

                }
              } 
          } 

          onLoad()
          {
                           let showpopup=false;
                           let hiddenpopup=true;
                           let showlayer=false;
                           let hiddenlayer=true;
            let k=window.confirm("Are you sure to continue?");
                  if(k)
                  {
                    let roomCount=$(".roomCount");
                    for (var i = 0; i < roomCount.length; ++i) 
                    {
                      if(($(roomCount[0]).val()=="")&&($(roomCount[1]).val()=="")&&($(roomCount[2]).val()=="")&&
                        ($(roomCount[3]).val()==""))
                        {
                          alert("Please select your rooms");
                        }
                        else
                        {
                          this.showlayer=true;
                          this.showpopup=true;
            
                          /*alert("Thanks for booking");*/
                      }
                   }
                  }
                  else
                  {
                    let roomCount=$(".roomCount");
           
                    for (var i = 0; i < roomCount.length; ++i) 
                    {
                      if($(roomCount[i]).val()!="")
                        {
                          $(roomCount[i]).val("");
                          $(".totalAmount").text("");
                        }
                     }
                   }
          }
           
           onPop()
              {
               this.showlayer=false;
               this.showpopup=false;
                 } 
            

         ngAfterViewInit()
          {
             for (var i = 0; i < this.apoorvaDetails.length; i++) 
             {
                 if(this.apoorvaDetails[i].hotelname == this.hotelname)
                 {
                   this.booked.push(this.apoorvaDetails[i]);
                 }
            }
       }
}
