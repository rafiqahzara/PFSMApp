import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewComparePageRoutingModule } from './view-compare-routing.module';

import { ViewComparePage } from './view-compare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewComparePageRoutingModule
  ],
  declarations: [ViewComparePage]
})
export class ViewComparePageModule {}
