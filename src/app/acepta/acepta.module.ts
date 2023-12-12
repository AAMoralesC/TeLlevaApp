import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AceptaPageRoutingModule } from './acepta-routing.module';

import { AceptaPage } from './acepta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AceptaPageRoutingModule
  ],
  declarations: [AceptaPage]
})
export class AceptaPageModule {}
