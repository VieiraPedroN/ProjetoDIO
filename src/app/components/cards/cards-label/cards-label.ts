import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-label',
  imports: [],
  templateUrl: './cards-label.html',
  styleUrl: './cards-label.css',
})
export class CardsLabel {
  @Input()
  gameLabel: string = '';
}
