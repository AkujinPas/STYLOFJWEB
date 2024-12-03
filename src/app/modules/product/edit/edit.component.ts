import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idProduct'];
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      price: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      brand: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      clothing_type_men: new FormControl(''),
      clothing_type_women: new FormControl(''),
      styles_by_ocassion: new FormControl('', [Validators.required]),
      season: new FormControl('', [Validators.required]),
      fabric_type: new FormControl('', [Validators.required]),
      size: new FormControl('', [Validators.required]),
      sleeve: new FormControl('', [Validators.required]),
      availability: new FormControl('', [Validators.required]),
      image_front: new FormControl(''),
      image_back: new FormControl('')
    });

    this.productService.find(this.id).subscribe((data: Product) => {
      this.product = data;
      
      setTimeout(() => {
        this.form.patchValue({
          name: this.product.name,
          price: this.product.price,
          brand: this.product.brand,
          gender: this.product.gender,
          clothing_type_men: this.product.clothing_type_men,
          clothing_type_women: this.product.clothing_type_women,
          styles_by_ocassion: this.product.styles_by_ocassion,
          season: this.product.season,
          fabric_type: this.product.fabric_type,
          size: this.product.size,
          sleeve: this.product.sleeve,
          availability: this.product.availability,
          image_front: this.product.image_front,
          image_back: this.product.image_back
        });
      });
    });
  }

  onFileSelected(event: Event, imageType: string) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        
        // Asignar el resultado base64 al campo correspondiente en el formulario
        if (imageType === 'image_front') {
          this.form.get('image_front')?.setValue(base64String);
        } else if (imageType === 'image_back') {
          this.form.get('image_back')?.setValue(base64String);
        }
      };
      
      reader.readAsDataURL(file); // Convertir el archivo a base64
    }
  }
  

  convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  genderChanged() {
    const typeGender = this.form.get('gender');
    const isMen = this.form.get('clothing_type_men');
    const isWomen = this.form.get('clothing_type_women');

    if (typeGender.value === 'male') {
      isWomen.setValue('');
    }
    if (typeGender.value === 'female') {
      isMen.setValue('');
    }
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log("Formulario enviado con los siguientes datos:", this.form.value); // Verifica los datos en la consola
    this.productService.update(this.id, this.form.value).subscribe(res => {
      console.log('Producto actualizado correctamente');
      this.router.navigateByUrl('product/index');
    });
  }
}
