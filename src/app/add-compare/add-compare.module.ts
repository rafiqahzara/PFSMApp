import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddComparePageRoutingModule } from './add-compare-routing.module';

import { AddComparePage } from './add-compare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddComparePageRoutingModule
  ],
  declarations: [AddComparePage]
})
export class AddComparePageModule {}
