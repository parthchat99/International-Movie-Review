import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  uri = 'http://localhost:4000/business';

  constructor(private http: HttpClient) { }

  addBusiness(movie_name, movie_yor, movie_plot, producer_name, producer_sex, producer_dob, producer_bio, director_name, director_sex, director_dob, director_bio, actor1_name, actor1_sex, actor1_dob, actor1_bio, actor2_name, actor2_sex, actor2_dob, actor2_bio, actor3_name, actor3_sex, actor3_dob, actor3_bio, actor4_name, actor4_sex, actor4_dob, actor4_bio) {
    const obj = {
      movie_name: movie_name,
      movie_yor: movie_yor, 
      movie_plot: movie_plot, 
      producer_name: producer_name, 
      producer_sex: producer_sex, 
      producer_dob: producer_dob, 
      producer_bio: producer_bio, 
      director_name: director_name, 
      director_sex: director_sex, 
      director_dob: director_dob, 
      director_bio: director_bio, 
      actor1_name: actor1_name, 
      actor1_sex: actor1_sex, 
      actor1_dob: actor1_dob, 
      actor1_bio: actor1_bio, 
      actor2_name: actor2_name, 
      actor2_sex: actor2_sex, 
      actor2_dob: actor2_dob, 
      actor2_bio: actor2_bio, 
      actor3_name: actor3_name, 
      actor3_sex: actor3_sex, 
      actor3_dob: actor3_dob, 
      actor3_bio: actor3_bio, 
      actor4_name: actor4_name, 
      actor4_sex: actor4_sex, 
      actor4_dob: actor4_dob, 
      actor4_bio: actor4_bio
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updateBusiness(movie_name, movie_yor, movie_plot, producer_name, producer_sex, producer_dob, producer_bio, director_name, director_sex, director_dob, director_bio, actor1_name, actor1_sex, actor1_dob, actor1_bio, actor2_name, actor2_sex, actor2_dob, actor2_bio, actor3_name, actor3_sex, actor3_dob, actor3_bio, actor4_name, actor4_sex, actor4_dob, actor4_bio, id) {

    const obj = {
      movie_name: movie_name,
      movie_yor: movie_yor, 
      movie_plot: movie_plot, 
      producer_name: producer_name, 
      producer_sex: producer_sex, 
      producer_dob: producer_dob, 
      producer_bio: producer_bio, 
      director_name: director_name, 
      director_sex: director_sex, 
      director_dob: director_dob, 
      director_bio: director_bio, 
      actor1_name: actor1_name, 
      actor1_sex: actor1_sex, 
      actor1_dob: actor1_dob, 
      actor1_bio: actor1_bio, 
      actor2_name: actor2_name, 
      actor2_sex: actor2_sex, 
      actor2_dob: actor2_dob, 
      actor2_bio: actor2_bio, 
      actor3_name: actor3_name, 
      actor3_sex: actor3_sex, 
      actor3_dob: actor3_dob, 
      actor3_bio: actor3_bio, 
      actor4_name: actor4_name, 
      actor4_sex: actor4_sex, 
      actor4_dob: actor4_dob, 
      actor4_bio: actor4_bio
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

 deleteBusiness(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
