import { Component, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  inputs: ['pData'],
  outputs: ['childEvent']
})
export class AboutComponent {
  pData: any;
  childEvent = new EventEmitter();
  sendData(val: string) {
    this.childEvent.emit(val);
  }
}
