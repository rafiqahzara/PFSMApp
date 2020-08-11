import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComparePage } from './add-compare.page';

const routes: Routes = [
  {
    path: '',
    component: AddComparePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddComparePageRoutingModule {}
