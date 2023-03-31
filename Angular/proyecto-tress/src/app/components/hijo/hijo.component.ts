import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() nombreEnHijo: string = "-";
  @Output() nombreEmitter =  new EventEmitter<string>();

  cambiaNombre(){
    this.nombreEnHijo = "Academia Angualr";
    this.nombreEmitter.emit(this.nombreEnHijo);
  }
}
