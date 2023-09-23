import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart: Book[] = [];

  addToCart(book: Book): void {
    //this.cart.push(book);
    const existingBook = this.cart.find((item) => item.id === book.id); 
    if (existingBook) 
    { existingBook.quantity += 1; // Increment quantity if book is already in the cart 
  } else { book.quantity = 1; // Set quantity to 1 for a new item 
  this.cart.push(book);
 }

  }

  getCart(): Book[] {
    return this.cart;
  }

  removeFromCart(book: Book): void {
    const index = this.cart.findIndex((item) => item.id === book.id);
    const existingBook = this.cart.find((item) => item.id === book.id);

    if (existingBook) {
      if (existingBook.quantity > 1) {
        existingBook.quantity -= 1; // Decrement quantity if more than 1 item
      } else {
        const index = this.cart.indexOf(existingBook);
        this.cart.splice(index, 1); // Remove the item if quantity is 1
      }

   
  }
}
}
