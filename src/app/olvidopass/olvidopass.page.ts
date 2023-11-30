import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-olvidopass',
  templateUrl: './olvidopass.page.html',
  styleUrls: ['./olvidopass.page.scss'],
})
export class OlvidopassPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert(){
    const alert=await this.alertController.create({
      header: 'Revisa tu email',
      message:'Hemos enviado un correo con tu nueva contraseña',
      buttons: ['Ok'],
    });
    await alert.present()
  }
}
