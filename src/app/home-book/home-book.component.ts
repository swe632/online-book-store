import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-book',
  templateUrl: './home-book.component.html',
  styleUrls: ['./home-book.component.css'],
})
export class HomeBookComponent {
  
  message: string = '';
  showMessage: boolean = false;
  
  constructor(private cartService: CartService, private router: Router) {}
  

  addToCart(book: Book): void {
    this.cartService.addToCart(book);
    this.showMessage = true;
    this.message = `${book.title} added to cart.`;
    this.router.navigateByUrl('/cart' );
    // After a few seconds, hide the message
    setTimeout(() => {
      this.showMessage = false;
    }, 3000);

    console.log(book);
  }

  books: Book[] = [
    {
      id: 1,
      title: 'Book Title 1',
      author: 'Author Name 1',
      price: 19.99,
      image: 'book1.jpg',
    },
    {
      id: 2,
      title: 'Book Title 2',
      author: 'Author Name 2',
      price: 24.99,
      image: 'book2.jpg',
    },
    {
      id: 3,
      title: 'Book Title 3',
      author: 'Author Name 3',
      price: 14.99,
      image: 'book3.jpg',
    },
    // Add more books here
    {
      id: 4,
      title: 'Book Title 4',
      author: 'Author Name 4',
      price: 15.99,
      image: 'book4.jpg',
    },
    {
      id: 5,
      title: 'Book Title 5',
      author: 'Author Name 5',
      price: 29.99,
      image: 'book5.jpg',
    },
    {
      id: 6,
      title: 'Book Title 6',
      author: 'Author Name 6',
      price: 12.99,
      image: 'book6.jpg',
    },
    {
      id: 7,
      title: 'Book Title 7',
      author: 'Author Name 7',
      price: 17.49,
      image: 'book7.jpg',
    },
    {
      id: 8,
      title: 'Book Title 8',
      author: 'Author Name 8',
      price: 22.99,
      image: 'book8.jpg',
    },
    {
      id: 9,
      title: 'Book Title 9',
      author: 'Author Name 9',
      price: 18.99,
      image: 'book9.jpg',
    },
    {
      id: 10,
      title: 'Book Title 10',
      author: 'Author Name 10',
      price: 14.99,
      image: 'book10.jpg',
    },
    // Add more books up to id 25
  ];

  viewProductDetails(id: number) {
    this.router.navigateByUrl('/product/' + id);
  }
}
