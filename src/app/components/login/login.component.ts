import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public users: Array<User> = [];
  
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient
      .get("http://localhost:3000/users")
      .subscribe(
        (response: any) => {
          console.log(response);
          this.users = response;
        }
      );
  }

}
