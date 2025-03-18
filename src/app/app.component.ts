import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FootballFieldComponent } from './components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FootballFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'football';
}
