import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly product: Product
  ) {}

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.form = this.formBuilder.group({
      name: [this.product.name, [Validators.required]],
      description: [this.product.description, [Validators.required]],
      height: [this.product.price, [Validators.required]],
      weight: [this.product.quantity, [Validators.required]],
      imgUrl: [this.product.imageUrl, [Validators.required]],
    });
  }

  submit() {
    this.dialogRef.close({ ...this.product, ...this.form.value });
  }
}
