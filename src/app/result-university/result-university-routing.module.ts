import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultUniversityPage } from './result-university.page';

const routes: Routes = [
  {
    path: '',
    component: ResultUniversityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultUniversityPageRoutingModule {}
