import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Rsvp } from 'src/app/model/rsvp';
import { RsvpServicesService } from 'src/app/services/rsvp-services.service';

@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.css']
})
export class RsvpFormComponent {

  rsvp:Rsvp={
    id:0,
    name:'',
    contact:'',
    message:'',
    numberOfGuest:0
  }

  @Input()
  currentRsvp:Rsvp;

  @Input()
  isEdit:boolean;

constructor(private dataService:RsvpServicesService){}
@ViewChild('userForm') form:any;

  onSubmit(userForm){
    console.log(userForm.value)
    this.dataService.postRsvp(userForm.value).subscribe((data)=>{
      console.log(data)
    })
    this.form.reset();
  }

  updateRsvp(userForm) {
    console.log(userForm)
    }
  
}
