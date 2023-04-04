import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ViewComponent } from './view/view.component';
import { CompletedComponent } from './completed/completed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    InputComponent,
    ViewComponent,
    CompletedComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ], 
  exports: [
    NavbarComponent,
    InputComponent,
    ViewComponent,
    CompletedComponent
  ]
})
export class ComponentsModule { }
