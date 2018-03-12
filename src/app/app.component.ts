import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.http
    //   .get('http://localhost:3000/setup')
    //   .subscribe(res => console.log(res));
  }

  authenticate() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    this.http
      .post(
        'http://localhost:3000/authenticate',
        { name: 'Seth Gibson', password: 'password', admin: true },
        httpOptions
      )
      .subscribe(res => console.log(res));
  }
}
