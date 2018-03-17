import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {

  @Input('title') title: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavButtonClick() {
    this.router.navigate(['/' + this.title.toLowerCase()]);
  }

}
