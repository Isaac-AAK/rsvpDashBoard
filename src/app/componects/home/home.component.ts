import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { Observable } from 'rxjs';
import { Rsvp } from 'src/app/model/rsvp';
import { RsvpServicesService } from 'src/app/services/rsvp-services.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{
 pageTitle = 'RSVP List';
  rsvps: Rsvp[] ;
  loadData = false;
  time:any;
  showFiller = true;

  displayedColumns: string[] = ['name', 'contact', 'numberOfGuest'];
  dataSource: MatTableDataSource<Rsvp>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private rsvpService:RsvpServicesService) {

  }

  ngAfterViewInit() {
    this.rsvpService.getPosts().subscribe(
      data =>{
        this.rsvps=data;  
        console.log( this.rsvps)  
        this.dataSource = new MatTableDataSource(this.rsvps);   
        this.dataSource.paginator = this.paginator;
    
        this.dataSource.sort = this.sort;
      }
    );
   
    console.log(this.dataSource.sort)

   
    
  //console.log(this.rsvps)
  
  }
  // callServerEvery2Mins(): Promise<any> {
   
  // return new Promise((resolve, reject) => {
  //   const interval = setInterval(() => {
  //     // Make server call here
  //     // ...
  //     console.log('Server called');

  //     // If server call is successful, resolve Promise
  //     resolve(  this.rsvpService.getPosts().subscribe(
  //       data => {
  //         if(data.length > 0){
  //           this.rsvps =data;
  //           console.log(this.rsvps)
  //           this.loadData=true;
  //         }
          
  //       }));
    

  //     // If server call fails, reject Promise with an error
  //     // reject(new Error('Server call failed'));

  //   }, 2000); // 2 minutes in milliseconds

  //   // Stop interval and reject Promise if server call takes too long
  //   setTimeout(() => {
  //     clearInterval(interval);
  //     reject(new Error('Server call timed out'));
  //   }, 3000); // 1 minute in milliseconds
  // });


  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


