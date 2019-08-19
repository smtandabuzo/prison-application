import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrisonerSentenceComponent } from './prisoner-sentence.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: PrisonerSentenceComponent
  }
];

@NgModule({
  declarations: [PrisonerSentenceComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class PrisonerSentenceModule { }
