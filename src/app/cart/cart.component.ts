import { Component, Input } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cart:Book[] = []; // The cart array from your main component

  getTotalPrice(): number {
    return this.cart.reduce((total, book) => total , 0);
  }
}
