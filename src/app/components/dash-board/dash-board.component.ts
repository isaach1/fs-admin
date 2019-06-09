import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from 'src/app/models/property.model';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  public properties: Array<Property> = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient
      .get("http://localhost:3000/properties")
      .subscribe(
        (response: any) => {
          console.log(response);
          this.properties = response;
        }
      );
  }

}
