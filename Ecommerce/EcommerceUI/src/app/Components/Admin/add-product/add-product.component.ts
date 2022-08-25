import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/products/product.service';

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
