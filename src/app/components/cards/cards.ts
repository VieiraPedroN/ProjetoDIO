import { Component, Input } from '@angular/core';
import { CardsLabel } from './cards-label/cards-label';
import { CardsPrice } from './cards-price/cards-price';

@Component({
  selector: 'app-cards',
  imports: [CardsLabel, CardsPrice],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  @Input()
  image: string = '';
}
