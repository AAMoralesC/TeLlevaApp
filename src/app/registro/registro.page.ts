import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario={
    nombre:"",
    correo:"",
    pass1:"",
    pass2:""
  }
  nombre:string="";
  correo:string="";
  pass1:string="";
  pass2:string="";


  r1: boolean= false;
  r2: boolean=false;
 



  constructor(private storage: Storage) { }


  async registrarUsuario(usuario: any){
    let usuariosRegistrados = await this.storage.get('usuarios')|| [];
    usuariosRegistrados.push(usuario);
    await this.storage.set('usuarios', usuariosRegistrados);
      

  }



  ngOnInit() {
  }

}
