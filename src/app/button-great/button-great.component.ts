import { Component } from '@angular/core';

@Component({
  selector: 'app-button-great',
  imports: [],
  template: `
  <button (click)="greet()">Saluda!!</button>
  `,
})
export class ButtonGreatComponent {
  greet() {
    console.log("Hello world from console")
  }
}
