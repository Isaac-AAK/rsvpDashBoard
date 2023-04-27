import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Rsvp } from '../model/rsvp';



@Injectable({
  providedIn:"root"
})
export class RsvpServicesService {
  rsvp:Rsvp[];
  data:Observable<any>;
 rsvpUrl: string ='http://127.0.0.1:8080/api/v1/rsvps';

  constructor(private http: HttpClient) { 
    this.rsvp =[{
      name:'Isaac',
      contact:'test@mail.com',
      message:'Love',
      numberOfGuest: 2
    },
    {
      name:'Nana',
      contact:'test@mail.com',
      message:'Love',
      numberOfGuest: 2
    },
    {
      name:'Akwasi',
      contact:'test@mail.com',
      message:'Love',
      numberOfGuest: 2
    }]
  }


  
  getRsvp(): Observable<Rsvp[]> {
    return of(this.rsvp);
  }
  getPosts() : Observable<Rsvp[]> {
    return this.http.get<Rsvp[]>(this.rsvpUrl);
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next({name: 'Brad'});
      }, 4000);
    });
    return this.data;
  }
 
}
