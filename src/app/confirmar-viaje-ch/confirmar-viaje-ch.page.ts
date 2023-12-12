import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Storage } from '@ionic/storage-angular';

export interface Pasajero{
  nombrePas:string,
  celular:string,
  carrera:string
}
export interface Viaje{
  hora: string,
  destino: string,
}



@Component({
  selector: 'app-confirmar-viaje-ch',
  templateUrl: './confirmar-viaje-ch.page.html',
  styleUrls: ['./confirmar-viaje-ch.page.scss'],
})

export class ConfirmarViajeChPage implements OnInit {

  viajes: any[] = [];
  pasajeros:Pasajero[] = []


  constructor(private storage: Storage, private alertController:AlertController) {

  }

  guardarViaje(nuevoViaje: any) {
    this.viajes.push(nuevoViaje); // Agrega el nuevo viaje al array de viajes
  }
  
  async ionViewDidEnter()  {
    this.pasajeros = await this.storage.get("pasajeros") || []
    this.viajes = await this.storage.get("viajes") || []
    
  }
  async presentAlert(){
    const alert=await this.alertController.create({
      header: 'Aceptando',
      message:'Aceptaste a viajar con este pasajero',
      buttons: ['Ok'],
    });
    await alert.present()
  }


  async ngOnInit() {

  }

}
