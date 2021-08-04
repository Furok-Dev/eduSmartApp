import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyresultPage } from './myresult.page';

const routes: Routes = [
  {
    path: '',
    component: MyresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyresultPageRoutingModule {}
