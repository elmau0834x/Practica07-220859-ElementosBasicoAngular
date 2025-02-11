import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonGreatComponent } from './button-great/button-great.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonGreatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practica07-220859-ElementosBasicosAngular';
}
