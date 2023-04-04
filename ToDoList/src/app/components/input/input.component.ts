import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  public tarea!: string;
  @Output() tareaAsignada: EventEmitter<string> = new EventEmitter();

  enviarTarea() {
    this.tareaAsignada.emit(this.tarea);
    this.tarea = "";
  }
}
