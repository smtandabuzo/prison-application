import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrisonerDetailComponent } from './prisoner-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: PrisonerDetailComponent
  }
];

@NgModule({
  declarations: [PrisonerDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class PrisonerDetailModule { }
