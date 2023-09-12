import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart: Book[] = [];

  addToCart(book: Book): void {
    this.cart.push(book);
  }

  getCart(): Book[] {
    return this.cart;
  }

  removeFromCart(book: Book): void {
    const index = this.cart.findIndex((item) => item.id === book.id);

    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
}
