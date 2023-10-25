import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Pasajero{
  nombrePas:string,
  celular:string,
  carrera:string
}



@Component({
  selector: 'app-confirmar-viaje-ch',
  templateUrl: './confirmar-viaje-ch.page.html',
  styleUrls: ['./confirmar-viaje-ch.page.scss'],
})

export class ConfirmarViajeChPage implements OnInit {

  pasajeros:Pasajero[] = []

  constructor(private storage: Storage) { }
  

  async ngOnInit() {
    this.pasajeros = await this.storage.get("pasajeros") || []
  }

}
