import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomechoferPageRoutingModule } from './homechofer-routing.module';

import { HomechoferPage } from './homechofer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomechoferPageRoutingModule
  ],
  declarations: [HomechoferPage]
})
export class HomechoferPageModule {}
