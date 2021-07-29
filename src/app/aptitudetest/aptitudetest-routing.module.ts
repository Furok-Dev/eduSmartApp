import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AptitudetestPage } from './aptitudetest.page';

const routes: Routes = [
  {
    path: '',
    component: AptitudetestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AptitudetestPageRoutingModule {}
