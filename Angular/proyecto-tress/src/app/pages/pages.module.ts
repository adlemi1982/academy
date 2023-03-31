import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponetsModule } from '../components/components.module';
import { PageComponent } from './page/page.component';

@NgModule({
declarations: [
   PageComponent
],
imports: [
  CommonModule,
  ComponetsModule
],
exports:[
  PageComponent
],
})
export class PagesModule { }
