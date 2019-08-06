import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferDetailComponent } from './transfer-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: TransferDetailComponent
  }
];

@NgModule({
  declarations: [TransferDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class TransferDetailModule { }
