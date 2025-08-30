import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { MenuBar } from './components/menu-bar/menu-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, MenuBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('store');
}
