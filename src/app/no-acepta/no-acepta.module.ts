import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoAceptaPageRoutingModule } from './no-acepta-routing.module';

import { NoAceptaPage } from './no-acepta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoAceptaPageRoutingModule
  ],
  declarations: [NoAceptaPage]
})
export class NoAceptaPageModule {}
