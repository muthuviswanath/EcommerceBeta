import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/Interface/IProducts';
import { ProductService } from 'src/app/Services/products/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productList: IProducts[]=[];
  IProducts:Array<any>=[];
  id:any;
  Product:any;
  constructor(private service:ProductService,private activatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.id=params.get('id');
    });
    this.getProductById(this.id);
  }
  getProductById(id:number){
    this.service.getProductdetail(id).subscribe((res)=>{
      this.Product=res;
    })
  }

}
