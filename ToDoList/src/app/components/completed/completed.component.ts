import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent {
  @Input() tareaTerminada: string[] = [];
  @Output() tareaSinResolver: EventEmitter<string> = new EventEmitter();

  regresarTareaPendiente(position: number) {
    this.tareaSinResolver.emit(this.tareaTerminada[position]);
    this.tareaTerminada.splice(position, 1);
    //this.tareaTerminada = null;
  }

  eliminarTareaCompletada(position: number) {
    this.tareaTerminada.splice(position, 1);
  }

}
