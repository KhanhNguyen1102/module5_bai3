import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  listProduct: Product[] = [
    {
      id:'1',
      name:'IP12',
      price:'1200'
    },
    {
      id:'2',
      name:'IP13',
      price:'1400'
    },
    {
      id:'3',
      name:'IP14',
      price:'1500'
    }
  ]
  productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  addProduct() {
    this.listProduct.push(this.productForm.value)
    console.log(this.productForm.value)
  }
}
