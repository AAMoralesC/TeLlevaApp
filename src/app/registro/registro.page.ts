import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';



export interface Usuario
{
  id:number,
  nombre:string,
  correo:string,
  pass1:string,
  tipo:string
 
}
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  toAdd:Usuario={
    id:0,
    nombre:"",
    correo:"",
    pass1:"",
    tipo:""
  }




  constructor(private storage: Storage) { }


  async registrarUsuario(){
    let usuariosRegistrados = await this.storage.get('usuario') || [];
    this.toAdd.id= usuariosRegistrados.length + 1
    usuariosRegistrados.push(this.toAdd);
    await this.storage.set('usuario', usuariosRegistrados);
    console.log(usuariosRegistrados)
  }



  async ngOnInit() {
    await this.storage.create();
  }

}
