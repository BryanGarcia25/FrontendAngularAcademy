import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent {
  public nombre!: string;
  public mostrarMensaje!: string;

  mensajeRecibido(mensaje: any) {
    this.mostrarMensaje = mensaje;
  }
}
