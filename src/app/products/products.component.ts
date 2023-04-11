import { Component, OnInit } from '@angular/core';
import { Observable, Subject, filter, takeUntil, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../services/product.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  destroyed$ = new Subject<void>();

  constructor(
    private productService: ProductService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((prods) => (this.products = prods));
  }

  addProduct(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      data: {},
      width: '90%',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((product) => this.productService.create(product)),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }
}
