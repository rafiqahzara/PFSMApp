import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewDisplayPageRoutingModule } from './review-display-routing.module';

import { ReviewDisplayPage } from './review-display.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewDisplayPageRoutingModule
  ],
  declarations: [ReviewDisplayPage]
})
export class ReviewDisplayPageModule {}
