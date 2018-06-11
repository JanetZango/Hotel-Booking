import { Component, OnInit } from '@angular/core';
import bookingsArray from '../array';
import { booking } from '../arrayList';



@Component({
  selector: 'app-confirmaton',
  templateUrl: './confirmaton.component.html',
  styleUrls: ['./confirmaton.component.css']
})
export class ConfirmatonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  bookingsList = bookingsArray;
  showStuff(){
    console.log(this.bookingsList);
  }
//   arrlist=[];

 
//   listb(firstname,lastname,phonenumber:string,email,arrivaldate,departuredate,children,adults){

//     let book = new booking(firstname,lastname,phonenumber,email,arrivaldate,departuredate,children,adults)
    
//     this.arrlist.push(book);
// }
}

