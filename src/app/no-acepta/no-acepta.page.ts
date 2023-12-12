import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-acepta',
  templateUrl: './no-acepta.page.html',
  styleUrls: ['./no-acepta.page.scss'],
})
export class NoAceptaPage  {

  constructor(
    public loadingController: LoadingController,
    private router: Router
  ) { }
  async mostrarLoading() {
    const loading = await this.loadingController.create({
      message: 'Redirigiendo...',
      duration: 2000,
      spinner: 'circles'
    });
    loading.present();

    loading.onDidDismiss().then(() => {
      // Redireccionar a la página deseada
      this.router.navigate(['/homepasajero']);
    });


 

}
}
