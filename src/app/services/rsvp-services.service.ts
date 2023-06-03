import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Rsvp } from '../model/rsvp';



@Injectable({
  providedIn:"root"
})
export class RsvpServicesService {
  rsvp:Rsvp;
  data:Observable<any>;
 rsvpUrl: string ='http://192.168.1.55:8000/api/v1/rsvps';

  constructor(private http: HttpClient) { 
   
  }


  
  getRsvp(): Observable<Rsvp> {
    return of(this.rsvp);
  }
  getPosts():Observable<Rsvp[]>{
    return this.http.get<Rsvp[]>(this.rsvpUrl);
  }
  delete(id:number):Observable<Rsvp[]>{
    return this.http.delete<Rsvp[]>(`${this.rsvpUrl}/${id}`);
  }
  update(rsvp:Rsvp){
    return this.http.put<Rsvp[]>(`${this.rsvpUrl}/${rsvp.id}`,rsvp)
  }
 postRsvp(rsvp:Rsvp){

  return this.http.post<Rsvp[]>(`${this.rsvpUrl}/add`,rsvp);
 }
}
