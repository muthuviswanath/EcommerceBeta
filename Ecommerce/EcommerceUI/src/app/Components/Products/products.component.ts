import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/Interface/IProducts';
import { ProductService } from 'src/app/Services/products/product.service';
4;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: IProducts[] = [];
  prdData: any = {};
  model: any = {};
  constructor(private service: ProductService, private route: Router) {
    let prdRecord = this.service.getOptions();
    // this.prdData = this.service
    //   .getProductById(prdRecord.productid)
    //   .subscribe((res) => (this.prdData = res));
  }
  ngOnInit(): void {
    this.service.getAllProducts().subscribe((res) => {
      this.productList = res;
      console.log(this.productList);
    });
  }

  public submit(prdid: any): void {
    this.model.productid = prdid;
    this.model.userid = 3;
    this.model.quantity = 1;
    console.log(this.model);
    this.service.addCart(this.model).subscribe(() => {
      this.route.navigateByUrl('/products');
    });
  }
  public submittowishlist(prdid: any): void {
    this.model.productid = prdid;
    this.model.userid = 3;
    console.log(this.model);
    this.service.addwishlist(this.model).subscribe(() => {
      this.route.navigateByUrl('/products');
    });
  }
}
