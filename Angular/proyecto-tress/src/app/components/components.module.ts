import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputComponent } from './input/input.component';
import { SelectedComponent } from './selected/selected.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    PadreComponent,
    HijoComponent,
    NavbarComponent,
    InputComponent,
    SelectedComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PadreComponent,
    HijoComponent,
    NavbarComponent,
    InputComponent
  ]
})
export class ComponetsModule { }
