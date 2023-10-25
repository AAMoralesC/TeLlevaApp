import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController, NavController } from '@ionic/angular';

export interface Usuario
{
  id:number,
  nombre:string,
  correo:string,
  pass1:string,
  tipo:string
 
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: Usuario[] = []
  constructor(private storage: Storage, private alertController: AlertController, private nav:NavController) { }

  email:string="";
  pass:string="";

  async ngOnInit() {
    await this.storage.create();
  }

  async ingresar() 
  {
    this.usuario = await this.storage.get("usuario")
    const usuarioEncontrado = this.usuario.find((usuario) => usuario.correo === this.email && usuario.pass1 === this.pass);
    if(usuarioEncontrado) 
    {
      if(usuarioEncontrado.tipo === 'pasajero')
      {
          this.nav.navigateForward(['/homepasajero'])
      }
      else if(usuarioEncontrado.tipo === 'chofer')
      {
          this.nav.navigateForward(['/homechofer'])
      }
    
    }
    else
    {
      //console.log("noooo")
    }

  }

}
