import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/Interface/IProducts';
import { ProductService } from 'src/app/Services/products/product.service';4

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: IProducts[]=[];
  IProducts:Array<any>=[];
  prdData:any={}
  i:number=0;
  public sortBy: string ='';

  public sortOption: string ='product_name|asc';
  model:any={};
  constructor(private service:ProductService){}
  ngOnInit():void{
    this.service.getAllProducts().subscribe(
      res => this.productList = res
    );
    let prdRecord = this.service.getOptions()
    this.prdData = this.service.getProductById(prdRecord.productid).subscribe(
      res => this.prdData = res
    )

   
    
  }
 

  getProduct(){
    this.service.getProductById(this.prdData.productid).subscribe()
  }
  public submit():void{
    this.service.addCart(this.model).subscribe();
  }

}
