import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/products/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    private addProduct: ProductService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productname: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      imagepath: ['', Validators.required],
      productrating: ['', Validators.required],
      productofferprice: ['', Validators.required],
      display: ['', Validators.required],
      memory: ['', Validators.required],
      processor: ['', Validators.required],
      camera: ['', Validators.required],
      battery: ['', Validators.required],
      security: ['', Validators.required],
    });
  }
  submit() {
    if (this.productForm.valid) {
      this.addProduct.addProduct(this.productForm.value).subscribe((res) => {
        alert('Product is added');
      });
    }
  }
}
