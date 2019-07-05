import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CasesComponent } from './cases.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: CasesComponent
  }
];

@NgModule({
  declarations: [CasesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
      IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class CasesModule { }
