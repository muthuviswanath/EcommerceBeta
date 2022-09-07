import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/products/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  productID: any;
  productData: any = {};
  constructor(
    private service: ProductService,
    private activateRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      this.productID = params.get('id');
    });
    this.getProductById(this.productID);
  }

  getProductById(id: number) {
    this.service.getProductdetail(id).subscribe((res) => {
      this.productData = res;
      this.productData.productid = id;
    });
  }
  update() {
    this.service
      .updateProduct(this.productData.productid, this.productData)
      .subscribe(() => {
        alert('Product is updated successfully');
        this.route.navigate(['/admin']);
      });
  }
}
