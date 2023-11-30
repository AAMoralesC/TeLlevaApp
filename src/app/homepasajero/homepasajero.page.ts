import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';



export interface Viaje{
  id: number,
  hora: string,
  asientos: number,
  destino: string,
  precio: number
}


@Component({
  selector: 'app-homepasajero',
  templateUrl: './homepasajero.page.html',
  styleUrls: ['./homepasajero.page.scss'],
})
export class HomepasajeroPage implements OnInit{


  viajes:Viaje[]=[]
  Busqueda: string = ''; 

  constructor(private storage: Storage, private router: Router) { }
    

  async ngOnInit() {
    this.viajes = await this.storage.get("viajes") || []
  }


  async ionViewDidEnter(){
    this.viajes = await this.storage.get("viajes") || []

  }
  filtrarViajes() {
    return this.viajes.filter((viaje: any) =>
      viaje.destino.toLowerCase().includes(this.Busqueda.toLowerCase()) ||
      viaje.asientos.toString().includes(this.Busqueda) ||
      viaje.precio.toString().includes(this.Busqueda)
    );
}
async seleccionarViaje(viaje: any) {
  try {
    await this.storage.set('viajeSeleccionado', viaje);
    // Redirigir a la página del pasajero
    this.router.navigate(['/confirmar-viaje-p']);
  } catch (error) {
    console.error('Error al almacenar el viaje seleccionado', error);
  }
}
}

