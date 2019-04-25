import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { DetailsPageComponent } from './details-page/details-page.component';

const routes: Routes = [
  {
		path: 'business',
		component: DashboardComponent
  },
  {
		path: 'details',
		component: DetailsPageComponent
  },
  {
		path: 'business/add',
		component: AddDetailsComponent
  },
  {
		path: 'business/edit/:id',
		component: EditDetailsComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
