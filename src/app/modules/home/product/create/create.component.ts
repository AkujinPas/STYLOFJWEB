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
  image_ini: string | ArrayBuffer | null = null;
  form: FormGroup;

  constructor(
    public productService: ProductService,
    
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
        price: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
        brand: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        clothing_type_men: new FormControl('', [Validators.required]),
        clothing_type_women: new FormControl('', [Validators.required]),
        styles_by_ocassion: new FormControl('', [Validators.required]),
        season: new FormControl('', [Validators.required]),
        fabric_type: new FormControl('', [Validators.required]),
        size: new FormControl('', [Validators.required]),
        sleeve: new FormControl('', [Validators.required]),
        availability: new FormControl('', [Validators.required]),
        image_front: new FormControl('', [Validators.required]),
        image_back: new FormControl('', [Validators.required])
    });

  }
  onFileSelected(event: any, controlName: string) {
    const file = event.target.files[0];
    if (file) {
      this.convertToBase64(file).then(base64Image => {
        this.form.patchValue({
          [controlName]: base64Image
        });
      });
    }
  }

  convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = error => reject(error);
    });
  }

  genderChanged() {
    const typeGender = this.form.get('gender');
    const isMen = this.form.get('clothing_type_men');
    const isWomen = this.form.get('clothing_type_women');

    // Si la opción es 'no', establece el valor de 'Price Offer' en blanco
    if (typeGender.value === 'male') {
      isWomen.setValue('');
    }
    if (typeGender.value === 'female') {
      isMen.setValue('');
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
