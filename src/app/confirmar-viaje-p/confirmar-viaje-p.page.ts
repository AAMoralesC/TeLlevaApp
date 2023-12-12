import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
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

  constructor(private alertController: AlertController, private storage: Storage,    public loadingController: LoadingController,
    private router: Router) { 

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

  async ionViewWillEnter() {
    try {
      this.viajeSeleccionado = await this.storage.get('viajeSeleccionado');
    } catch (error) {
      console.error('Error al recuperar el viaje seleccionado', error);
    }
  }
  async mostrarLoading() {
    const loading = await this.loadingController.create({
      message: 'Esperando...',
      duration: 4000,
      spinner: 'circles'
    });
    loading.present();

    loading.onDidDismiss().then(() => {
      // Redireccionar a la página deseada
      this.router.navigate(['/']);
    });


 
  }
}
