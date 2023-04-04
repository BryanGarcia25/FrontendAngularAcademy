import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    PageComponent
  ]
})
export class PagesModule { }
