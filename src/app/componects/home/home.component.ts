import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rsvp } from 'src/app/model/rsvp';
import { RsvpServicesService } from 'src/app/services/rsvp-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 pageTitle = 'RSVP List';
  rsvps: any ;
  loadData:boolean = false;
  time:any;
 constructor(private rsvpService:RsvpServicesService){
 

 }
 ngOnInit(): void {
  this.time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
   this.rsvpService.getPosts().subscribe(
    data => {
      if(data.length > 0){
        this.rsvps =data;
        this.loadData=true;
      }
      
    });
   
   console.log(this.pageTitle)

   this.callServerEvery2Mins()
  .then(() => console.log('Server call successful'))
  .catch((error) => console.error(error));

 }

 callServerEvery2Mins(): Promise<any> {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      // Make server call here
      // ...
      console.log('Server called');

      // If server call is successful, resolve Promise
      resolve(  this.rsvpService.getPosts().subscribe(
        data => {
          if(data.length > 0){
            this.rsvps =data;
            console.log(this.rsvps)
            this.loadData=true;
          }
          
        }));
    

      // If server call fails, reject Promise with an error
      // reject(new Error('Server call failed'));

    }, 2000); // 2 minutes in milliseconds

    // Stop interval and reject Promise if server call takes too long
    setTimeout(() => {
      clearInterval(interval);
      reject(new Error('Server call timed out'));
    }, 3000); // 1 minute in milliseconds
  });
}

}
