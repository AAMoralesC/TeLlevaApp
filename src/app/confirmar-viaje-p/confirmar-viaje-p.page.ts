import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';



export interface Pasajero{
  nombrePas:string,
  celular:string,
  carrera:string
}
export interface Viaje{
  id: number,
  hora: string,
  asientos: number,
  destino: string,
  precio: number
}

@Component({
  selector: 'app-confirmar-viaje-p',
  templateUrl: './confirmar-viaje-p.page.html',
  styleUrls: ['./confirmar-viaje-p.page.scss'],
})
export class ConfirmarViajePPage {
  viajeSeleccionado: any;
  viajes: any[] = [];

  agregar:Pasajero={ 
    nombrePas:"",
    celular:"",
    carrera:""
   }

  constructor(private alertController: AlertController, private storage: Storage) { 

  }

  async ngOnInit(){
    await this.storage.create(); 
  }


  async guardarPas(){
    let pasajeros = await this.storage.get("pasajeros") || []; 
    
    pasajeros.push(this.agregar)
    this.storage.set("pasajeros", pasajeros)
    console.log(pasajeros)
  }
  async ionViewDidEnter() {
    this.viajes = await this.storage.get("viajes") || []
  }
  async presentAlert(){
    const alert=await this.alertController.create({
      header: 'Solicitando Viaje...',
      message:'Te notificaremos cuando el chofer acepte tu solicitud',
      buttons: ['Ok'],
    });
    await alert.present()
  }
  async ionViewWillEnter() {
    try {
      this.viajeSeleccionado = await this.storage.get('viajeSeleccionado');
    } catch (error) {
      console.error('Error al recuperar el viaje seleccionado', error);
    }
  }
}
