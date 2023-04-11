import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

  removeItem(item: Product) {
    this.cartService.removeCartItem(item);
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  checkout() {
    // Implement checkout functionality here
  }
}
