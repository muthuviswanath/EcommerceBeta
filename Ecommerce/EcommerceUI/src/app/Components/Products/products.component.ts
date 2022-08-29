import { Router } from '@angular/router';
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
  filter:string="";
  constructor(private service:ProductService, private route: Router){}
  ngOnInit():void{
    this.service.getAllProducts().subscribe(
      res => this.productList = res
    ); 
  }
  public submit(prdid:any):void{
    this.model.productid = prdid;
    this.model.userid = +localStorage.getItem('userid');
    this.model.quantity = 1;
    console.log(this.model);
    alert("Added to cart");
    this.service.addCart(this.model).subscribe(() => {
      // this.route.navigateByUrl('/Products');
    });
  }

  public submittowishlist(prdid:any):void{
    this.model.productid = prdid;
    this.model.userid = +localStorage.getItem('userid');
    console.log(this.model);
    alert("Added to wishlist");
    this.service.addwishlist(this.model).subscribe(() => {
      // this.route.navigateByUrl('/Products');
    });
  }

  searchText:string='';
  onSearchTextEntered(searchValue:string){
    this.searchText=searchValue;
    // console.log(this.searchText);
  }
}
