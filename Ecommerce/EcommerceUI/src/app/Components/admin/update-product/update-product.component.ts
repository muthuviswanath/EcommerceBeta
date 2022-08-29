import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/products/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productForm:FormGroup;
  constructor(private updateProduct:ProductService,private formBuilder:FormBuilder) {
    
    
    
   }

  ngOnInit(): void {
    
  }
 

  onUpdate()
  {
    
  }

}
