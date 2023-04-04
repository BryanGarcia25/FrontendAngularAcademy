import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  @Input() tareaPendiente: string[] = [];
  @Output() tareaCompletada: EventEmitter<string> = new EventEmitter();

  enviarTareaCompletada(position: number) {
    this.tareaCompletada.emit(this.tareaPendiente[position]);
    this.tareaPendiente.splice(position, 1);
  }

  eliminarTareaPendiente(position: number) {
    this.tareaPendiente.splice(position, 1);
  }
}
