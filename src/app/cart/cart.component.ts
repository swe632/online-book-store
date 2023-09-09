import { Component, Input } from '@angular/core';
import { Book } from '../models/book.model';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
   cart:Book[] = []; // The cart array from your main component
   books: Book[] = [];
   totalPrice: number = 0;
   constructor(private cartService: CartService) { }
   ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.calculateTotalPrice();
  }


  removeFromCart(book: Book): void {
    this.cartService.removeFromCart(book);
    this.cart = this.cartService.getCart(); // Update the cart data after removal
    this.calculateTotalPrice();
  }


  calculateTotalPrice(): void {
    // Calculate the total price of items in the cart
    this.totalPrice = this.cart.reduce((total, book) => total + book.price, 0);
  }

}
