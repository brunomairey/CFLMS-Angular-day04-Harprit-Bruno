import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogentries } from '../blogentries';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
about;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() { 
  this.route.paramMap.subscribe(params => {
   this.about = blogentries[+params.get('ID')];
  });
 
  }

}
