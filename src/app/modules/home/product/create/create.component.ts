import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {

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
        carrusel: new FormControl('', [Validators.required]),
        image_1: new FormControl('', [Validators.required]),
        image_2: new FormControl('', [Validators.required]),
        image_3: new FormControl('', [Validators.required]),
        image_4: new FormControl('', [Validators.required]),
        image_5: new FormControl('', [Validators.required]),
        publish_date: new FormControl('', [Validators.required])

    });

  }
  offerEnableChanged() {
    const offerEnableControl = this.form.get('offer_enable');
    const priceOfferControl = this.form.get('price_offer');
    const priceControl = this.form.get('price');

    // Si la opción es 'no', establece el valor de 'Price Offer' en blanco
    if (offerEnableControl.value === 'no') {
      priceOfferControl.setValue('');
    }
    if (offerEnableControl.value === 'si') {
      priceControl.setValue('');
    }
  }

  carruselChanged() {
    const carruselControl = this.form.get('carrusel');
    const imageSecondControl = this.form.get('image_2');
    const imageThirdControl = this.form.get('image_3');
    const imageFourthControl = this.form.get('image_4');
    const imageFifthControl = this.form.get('image_5');

    if (carruselControl.value < 2) {
      imageSecondControl.setValue('');
    }
    if (carruselControl.value < 3) {
      imageThirdControl.setValue('');
    }
    if (carruselControl.value < 4) {
      imageFourthControl.setValue('');
    }
    if (carruselControl.value < 5) {
      imageFifthControl.setValue('');
    }

  }

  categoryChanged() {
    const categoryControl = this.form.get('category');
    const sizeShoesControl = this.form.get('size_shoes');
    const sizeFashionControl = this.form.get('size_fashion');


    if (categoryControl.value !== 'size_shoes') {
      sizeShoesControl.setValue('');
    }
    if (categoryControl.value !== 'size_fashion') {
      sizeFashionControl.setValue('');
    }

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.productService.create(this.form.value).subscribe(res => {
         console.log('Product created successfully!');
         this.router.navigateByUrl('product/index');
    })
  }

}
