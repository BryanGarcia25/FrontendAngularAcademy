import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  public tareaPorAsignar: string[] = [];
  public tareaConcluida: string[] = [];

  recibirTarea(tarea: string) {
    this.tareaPorAsignar.push(tarea);
  }

  recibirTareaCompletada(tareaRealizada: string) {
    this.tareaConcluida.push(tareaRealizada);
  }

  recibirTareaPendiente(tareaPendiente: string) {
    this.tareaPorAsignar.push(tareaPendiente);
  }

}
