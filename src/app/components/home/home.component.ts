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
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit{
 pageTitle = 'RSVP List';
  rsvps: Rsvp[] ;
  currentRsvp: Rsvp ={
    id:0,
    name:'',
    contact:'',
    message:'',
    numberOfGuest:0
  }
  loadData = false;
  time:any;
  showFiller = true;
  testShow=true;
  isEdit:boolean=false;
  displayedColumns: string[] = ['id','name', 'contact', 'numberOfGuest'];
  dataSource: MatTableDataSource<Rsvp>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private rsvpService:RsvpServicesService) {

  }
  @ViewChild('userForm') form:any;
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
  
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 

  deleteRsvp(rsvp:Rsvp){
    console.log(rsvp.id)
    this.rsvpService.delete(rsvp.id).subscribe((data)=>{

    })
    console.log('click')
  }

  update(rsvp:Rsvp){
    console.log('click')
    this.currentRsvp=rsvp;
    this.rsvpService.update(this.currentRsvp).subscribe((data)=>{
      console.log(data)
      this.isEdit=true;
    })
  }
}


