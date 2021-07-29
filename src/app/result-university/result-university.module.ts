import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultUniversityPageRoutingModule } from './result-university-routing.module';

import { ResultUniversityPage } from './result-university.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultUniversityPageRoutingModule
  ],
  declarations: [ResultUniversityPage]
})
export class ResultUniversityPageModule {}
