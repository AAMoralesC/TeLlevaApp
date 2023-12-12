import { Component, OnInit } from '@angular/core';4
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-acepta',
  templateUrl: './acepta.page.html',
  styleUrls: ['./acepta.page.scss'],
  animations: [
    trigger('moverAuto', [
      state('start', style({
        transform: 'translateX(-100%)' /* Posición inicial horizontal del auto */
      })),
      state('end', style({
        transform: 'translateX(100vw)' /* Posición final horizontal del auto */
      })),
      transition('start <=> end', animate('3s linear')) /* Define la transición de la animación */
    ])
  ]
})
export class AceptaPage {

  animState = 'start'; // Estado inicial de la animación

  ngOnInit() {
    setTimeout(() => {
      this.animState = 'end'; // Cambia al estado final para iniciar la animación
    }, 100); // Pequeño retraso para asegurar que la vista se haya cargado completamente
  }
}
