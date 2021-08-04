import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversityresultPage } from './universityresult.page';

const routes: Routes = [
  {
    path: '',
    component: UniversityresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversityresultPageRoutingModule {}
