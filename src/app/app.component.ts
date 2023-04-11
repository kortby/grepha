import { Component } from '@angular/core';
import { CartService } from './services/cart.service';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'grepha';

  opened = false;
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getItems();
  }

  toggleSidenav() {
    this.opened = !this.opened;
  }
}
