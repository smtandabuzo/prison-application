import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourtDetailComponent } from './court-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: CourtDetailComponent
  }
];

@NgModule({
  declarations: [CourtDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class CourtDetailModule { }
