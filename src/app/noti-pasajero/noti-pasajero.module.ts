import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotiPasajeroPageRoutingModule } from './noti-pasajero-routing.module';

import { NotiPasajeroPage } from './noti-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotiPasajeroPageRoutingModule
  ],
  declarations: [NotiPasajeroPage]
})
export class NotiPasajeroPageModule {}
