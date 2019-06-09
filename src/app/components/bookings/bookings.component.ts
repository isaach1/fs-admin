import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from 'src/app/models/booking.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  public bookings: Array<Booking> = [];
  
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient
      .get("http://localhost:3000/all/bookings")
      .subscribe(
        (response: any) => {
          console.log(response);
          this.bookings = response;
        }
      )
  }

}
