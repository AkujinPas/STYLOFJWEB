import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  product: Product;
  form: FormGroup;

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idProduct'];
    this.productService.find(this.id).subscribe((data: Product)=>{
      this.product = data;
    });

    this.form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
        price: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
        price_offer: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
        description: new FormControl('', [Validators.required]),
        details: new FormControl('', [Validators.required]),
        stock: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
        category: new FormControl('', [Validators.required]),
        mark: new FormControl('', [Validators.required]),
        model: new FormControl('', [Validators.required]),
        size_shoes: new FormControl('', [Validators.required]),
        size_fashion: new FormControl('', [Validators.required]),
        color: new FormControl('', [Validators.required]),
        offer_enable: new FormControl('', [Validators.required]),
        image_ini: new FormControl('', [Validators.required]),
        image_1: new FormControl('', [Validators.required]),
        image_2: new FormControl('', [Validators.required]),
        image_3: new FormControl('', [Validators.required]),
        image_4: new FormControl('', [Validators.required]),
        image_5: new FormControl('', [Validators.required]),
        publish_date: new FormControl('', [Validators.required])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.productService.update(this.id, this.form.value).subscribe(res => {
         console.log('Product updated successfully!');
         this.router.navigateByUrl('product/index');
    })
  }

}
