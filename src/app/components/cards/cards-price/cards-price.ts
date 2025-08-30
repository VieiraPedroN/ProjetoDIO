import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-price',
  imports: [],
  templateUrl: './cards-price.html',
  styleUrl: './cards-price.css',
})
export class CardsPrice {
  @Input()
  title: string = '';

  @Input()
  value: string = '';
}
