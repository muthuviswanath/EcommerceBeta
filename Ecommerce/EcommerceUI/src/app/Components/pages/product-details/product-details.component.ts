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
  model:any;
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
      // this.id=id;
      this.service.update(id,res);
    })
  }
  public submittocart(pid:any):void{
    this.Product.productid =pid;
    this.Product.userid = 3;
    console.log(this.Product);
    alert("Added to cart");
    this.service.addCart(this.Product).subscribe();
  }
  public submittowishlist(pid:any):void{
    this.Product.productid = pid;
    this.Product.userid = 3;
    console.log(this.Product);
    alert("Added to wishlist");
    this.service.addwishlist(this.Product).subscribe();
  }

}
