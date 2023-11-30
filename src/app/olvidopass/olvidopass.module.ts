import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidopassPageRoutingModule } from './olvidopass-routing.module';

import { OlvidopassPage } from './olvidopass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidopassPageRoutingModule
  ],
  declarations: [OlvidopassPage]
})
export class OlvidopassPageModule {}
