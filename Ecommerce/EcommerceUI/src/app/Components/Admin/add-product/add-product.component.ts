import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/products/product.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  model: any = {};
  constructor(private addProduct:ProductService) { }

  ngOnInit(): void {
  }
  public submit(): void{
    this.addProduct.addProductDetails(this.model).subscribe();
  }

}
