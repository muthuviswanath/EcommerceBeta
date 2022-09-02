import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/Interface/IProducts';
import { ProductService } from 'src/app/Services/products/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private service:ProductService) { }
  productList:IProducts[]=[]
  ngOnInit(): void {
    this.service.getAllProducts().subscribe(res=>this.productList=res)
  }

  delete(productid :number)
  {
      this.service.deleteProduct(productid).subscribe(()=> window.location.reload());


  }

}
