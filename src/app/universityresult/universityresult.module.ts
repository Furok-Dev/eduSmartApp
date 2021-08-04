import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversityresultPageRoutingModule } from './universityresult-routing.module';

import { UniversityresultPage } from './universityresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversityresultPageRoutingModule
  ],
  declarations: [UniversityresultPage]
})
export class UniversityresultPageModule {}
