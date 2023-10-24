import { Component, OnInit } from '@angular/core';
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


  constructor( private storage: Storage) { }

  async ngOnInit() {
    this.viajes = await this.storage.get("viajes") || []
    
  }



}
