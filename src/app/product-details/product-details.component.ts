import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  message: string = '';
  showMessage: boolean = false;

  product: Book = {
    id: 0,
    title: '',
    author: '',
    price: 0,
    image: '',
    quantity: 0,
    selected: false
  };

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProductById(productId).subscribe((product) => {
      this.product = product;
    });
  }
  addToCart(product: Book) {
    this.cartService.addToCart(product);
    this.showMessage = true;
    this.message = `${product.title} added to cart.`;

    // After a few seconds, hide the message
    setTimeout(() => {
      this.showMessage = false;
      this.message = '';
    }, 3000);
  }
}
