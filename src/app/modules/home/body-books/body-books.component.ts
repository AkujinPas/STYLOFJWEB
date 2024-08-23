import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-body-books',
  templateUrl: './body-books.component.html',
  styleUrls: ['./body-books.component.css']
})
export class BodyBooksComponent implements OnInit {
  products: Product[] = [];
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: Product[])=>{
      this.products = data;
      console.log(this.products);
    })
  }
}

