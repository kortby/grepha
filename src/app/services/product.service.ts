import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.productCollection = collection(this.firestore, 'product');
  }

  getAll() {
    return collectionData(this.productCollection, {
      idField: 'id',
    }) as Observable<Product[]>;
  }

  get(id: string) {
    const productDocumentReference = doc(this.firestore, `product/${id}`);
    return docData(productDocumentReference, { idField: 'id' });
  }

  create(product: Product) {
    return addDoc(this.productCollection, product);
  }

  update(product: Product) {
    const productDocumentReference = doc(
      this.firestore,
      `product/${product.id}`
    );
    return updateDoc(productDocumentReference, { ...product });
  }

  delete(id: string) {
    const productDocumentReference = doc(this.firestore, `product/${id}`);
    return deleteDoc(productDocumentReference);
  }
}
