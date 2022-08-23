import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/Interface/IProducts';
import { ProductService } from 'src/app/Services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: IProducts[]=[];
  IProducts:Array<any>=[];
  constructor(private service:ProductService){}
  ngOnInit():void{
    this.service.getAllProducts().subscribe(
      res => this.productList = res
    );
    
  }

}
