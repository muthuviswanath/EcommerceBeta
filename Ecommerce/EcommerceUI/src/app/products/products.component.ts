import { Component, OnInit } from '@angular/core';
import { IProducts } from '../IProducts';
import { ProductService } from '../product.service';

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
