import { Component, OnInit } from '@angular/core';
import { Rsvp } from 'src/app/model/rsvp';
import { RsvpServicesService } from 'src/app/services/rsvp-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 pageTitle = 'RSVP List';
  rsvps: Rsvp[] ;
 constructor(private rsvpService:RsvpServicesService){
 

 }
 ngOnInit(): void {

  
   this.rsvpService.getRsvp().subscribe(rsvp =>{
    console.log(rsvp);
    this.rsvps = rsvp;
   } );

   this.rsvpService.getPosts().subscribe(rsvp =>{
    console.log(rsvp);
    this.rsvps = rsvp;
   } );
   
   console.log(this.pageTitle)
 }


}
