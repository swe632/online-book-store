import { Component } from '@angular/core';
import { Product, ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';

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

  product: Product = {
    id: 0,
    title: '',
    author: '',
    price: 0,
    image: '',
    quantity: 0,
  };

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProductById(productId).subscribe((product) => {
      this.product = product;
    });
  }
  addToCart(product: Product) {
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
