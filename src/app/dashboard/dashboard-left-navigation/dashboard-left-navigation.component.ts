import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-left-navigation',
  templateUrl: './dashboard-left-navigation.component.html',
  styleUrls: ['./dashboard-left-navigation.component.scss']
})
export class DashboardLeftNavigationComponent implements OnInit {

  public buttonTitles = ['Calories', 'Running', 'Eating', 'Weight'];

  constructor() { }

  ngOnInit() {
  }

}
