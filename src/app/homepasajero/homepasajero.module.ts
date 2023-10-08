import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepasajeroPageRoutingModule } from './homepasajero-routing.module';

import { HomepasajeroPage } from './homepasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepasajeroPageRoutingModule
  ],
  declarations: [HomepasajeroPage]
})
export class HomepasajeroPageModule {}
