import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrisonerPersonalComponent } from './prisoner-personal.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PrisonerPersonalComponent
  }
];

@NgModule({
  declarations: [PrisonerPersonalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PrisonerPersonalModule { }
