import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  angForm: FormGroup;
  business: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: MovieService,
    private fb: FormBuilder) {
      this.createForm();
     }

  createForm() {
    this.angForm = this.fb.group({
      actor1_name: ['', Validators.required ],
      actor1_sex: ['', Validators.required ],
      actor1_dob: ['', Validators.required ],
      actor1_bio: ['', Validators.required ],
      actor2_name: ['', Validators.required ],
      actor2_sex: ['', Validators.required ],
      actor2_dob: ['', Validators.required ],
      actor2_bio: ['', Validators.required ],
      actor3_name: ['', Validators.required ],
      actor3_sex: ['', Validators.required ],
      actor3_dob: ['', Validators.required ],
      actor3_bio: ['', Validators.required ],
      actor4_name: ['', Validators.required ],
      actor4_sex: ['', Validators.required ],
      actor4_dob: ['', Validators.required ],
      actor4_bio: ['', Validators.required ],
      producer_name: ['', Validators.required ],
      producer_sex: ['', Validators.required ],
      producer_dob: ['', Validators.required ],
      producer_bio: ['', Validators.required ],
      movie_name: ['', Validators.required ],
      movie_yor: ['', Validators.required ],
      movie_plot: ['', Validators.required ],
      director_name: ['', Validators.required ],
      director_sex: ['', Validators.required ],
      director_dob: ['', Validators.required ],
      director_bio: ['', Validators.required ],
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.business = res;
      });
    });
  }

  updateBusiness(movie_name, movie_yor, movie_plot, producer_name, producer_sex, producer_dob, producer_bio, director_name, director_sex, director_dob, director_bio, actor1_name, actor1_sex, actor1_dob, actor1_bio, actor2_name, actor2_sex, actor2_dob, actor2_bio, actor3_name, actor3_sex, actor3_dob, actor3_bio, actor4_name, actor4_sex, actor4_dob, actor4_bio) {
   this.route.params.subscribe(params => {
      this.bs.updateBusiness(movie_name, movie_yor, movie_plot, producer_name, producer_sex, producer_dob, producer_bio, director_name, director_sex, director_dob, director_bio, actor1_name, actor1_sex, actor1_dob, actor1_bio, actor2_name, actor2_sex, actor2_dob, actor2_bio, actor3_name, actor3_sex, actor3_dob, actor3_bio, actor4_name, actor4_sex, actor4_dob, actor4_bio, params['id']);
      this.router.navigate(['business']);
   });
  }
}
