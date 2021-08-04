import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyresultPageRoutingModule } from './myresult-routing.module';

import { MyresultPage } from './myresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyresultPageRoutingModule
  ],
  declarations: [MyresultPage]
})
export class MyresultPageModule {}
