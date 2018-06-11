import { Component, OnInit } from '@angular/core';
import { booking } from '../arrayList';
import bookingsArray from '../array';

@Component({
  selector: 'app-display-bookings',
  templateUrl: './display-bookings.component.html',
  styleUrls: ['./display-bookings.component.css']
})
export class DisplayBookingsComponent implements OnInit {

  arr = [];

  firstname;
  lastname;
  phonenumber;
  email;
  arrivaldate;
  departuredate;
  children;
  adults;

  constructor() { }

  listb(firstname, lastname, phonenumber, email, arrivaldate, departuredate, children, adults) {

    let book = new booking(firstname, lastname, phonenumber, email, arrivaldate, departuredate, children, adults)
    bookingsArray.push(book);
  }




  ngOnInit() {
  }




}
