import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/Interface/IProducts';
import { ProductService } from 'src/app/Services/products/product.service';4
import { ActivatedRoute } from '@angular/router';
import { Filter } from 'src/app/Filter';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: IProducts[]=[];
  IProducts:Array<any>=[];
  prdData:any={}
  Id:number
  product:any
  model:any={};
  constructor(private service:ProductService){}
  ngOnInit():void{
    this.service.getAllProducts().subscribe(
      res => this.productList = res
    ); 
  }
  public submit(prdid:any):void{
    this.model.productid = prdid;
    this.model.userid = 3;
    console.log(this.model);
    alert("Added to cart");
    this.service.addCart(this.model).subscribe();
  }

  public submittowishlist(prdid:any):void{
    this.model.productid = prdid;
    this.model.userid = 3;
    console.log(this.model);
    alert("Added to wishlist");
    this.service.addwishlist(this.model).subscribe();
  }

  searchText:string='';
  onSearchTextEntered(searchValue:string){
    this.searchText=searchValue;
    console.log(this.searchText);
  }
}
