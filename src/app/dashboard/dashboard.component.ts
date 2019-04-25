import { Component, OnInit } from '@angular/core';
import Business from '../imdb';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  businesses: Business[];

  constructor(private bs: MovieService) { }

  ngOnInit() {
    this.bs
    .getBusinesses()
    .subscribe((data: Business[]) => {
      this.businesses = data;
  });

  }

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
