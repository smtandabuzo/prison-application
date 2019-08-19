import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrisonersComponent } from './prisoners.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: PrisonersComponent,
    children: [
      {
        path: 'personal',
        children: [
          {
            path: '',
            loadChildren: '../prisoner-personal/prisoner-personal.module#PrisonerPersonalModule'
          }
        ]
      },
      {
        path: 'sentence',
        children: [
          {
            path: '',
            loadChildren: '../prisoner-sentence/prisoner-sentence.module#PrisonerSentenceModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [PrisonersComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class PrisonersModule { }
