import { Component, OnInit } from '@angular/core';
import Business from '../imdb';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  businesses: Business[];

  constructor(private bs: MovieService) { }

  ngOnInit() {
    this.bs
    .getBusinesses()
    .subscribe((data: Business[]) => {
      this.businesses = data;
    });
  }

}
