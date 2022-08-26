import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/Interface/IProducts';
import { ProductService } from 'src/app/Services/products/product.service';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private service:ProductService) { }
  productList: IProducts[]=[];
  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data)=>(this.productList=data))
  }

}
