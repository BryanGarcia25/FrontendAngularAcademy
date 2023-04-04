import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent {
  @Input() recibirNombre!: string;
  @Output() mensaje: EventEmitter<string> = new EventEmitter();


  EmitirMensaje() {
    console.log(this.recibirNombre)
    if (this.recibirNombre == null || this.recibirNombre.trim().length == 0) {
      this.mensaje.emit("No haz escrito un nombre");
    } else {
      this.mensaje.emit("Haz escrito un nombre");
    }
    
  }

}
