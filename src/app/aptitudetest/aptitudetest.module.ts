import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AptitudetestPageRoutingModule } from './aptitudetest-routing.module';

import { AptitudetestPage } from './aptitudetest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AptitudetestPageRoutingModule
  ],
  declarations: [AptitudetestPage]
})
export class AptitudetestPageModule {}
