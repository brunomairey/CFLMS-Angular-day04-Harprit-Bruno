import { Component, OnInit } from '@angular/core';
import { blogentries } from '../blogentries';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	articles = blogentries;
  constructor() { }

  ngOnInit() {
  }

}
