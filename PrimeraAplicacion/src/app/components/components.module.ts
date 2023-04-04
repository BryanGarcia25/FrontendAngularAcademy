import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ComponenteHijoComponent,
    ComponentePadreComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ComponenteHijoComponent,
    ComponentePadreComponent
  ]
})
export class ComponentsModule { }
