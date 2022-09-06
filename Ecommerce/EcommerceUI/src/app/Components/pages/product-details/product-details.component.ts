import { WishlistService } from './../../../Services/wishlist/wishlist.service';
import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/Interface/IProducts';
import { ProductService } from 'src/app/Services/products/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/Services/shoppingcart/shopping-cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  Product: any;
  shoppingCartList: any;
  wishlist: any;
  constructor(
    private service: ProductService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private shoppingcartservice: ShoppingCartService,
    private wishlistservice: WishlistService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.getProductById(this.id);
  }
  getProductById(id: number) {
    this.service.getProductdetail(id).subscribe((res) => {
      this.Product = res;
      this.service.update(id, res);
    });
  }
  public submittocart(pid: any): void {
    this.Product.productid = pid;
    this.Product.userid = +localStorage.getItem('userid');
    if (this.Product.userid == 0) {
      this.route.navigateByUrl('/login');
    } else {
      this.Product.quantity = 1;
      this.shoppingcartservice
        .getAllShoppingCartProductOfUser(this.Product.userid)
        .subscribe((res) => {
          this.shoppingCartList = res;
          let flag = 0;
          for (let i = 0; i < this.shoppingCartList.length; i++) {
            if (
              this.Product.productid ==
              this.shoppingCartList[i].product.productid
            ) {
              flag = 1;
              alert('This product is already added in your shopping cart.');
              break;
            }
          }
          if (flag == 0)
            this.service.addCart(this.Product).subscribe(() => {
              alert('Added to cart');
              window.location.reload();
            });
        });
    }
  }
  public submittowishlist(pid: any): void {
    this.Product.productid = pid;
    this.Product.userid = +localStorage.getItem('userid');
    if (this.Product.userid == 0) {
      this.route.navigateByUrl('/login');
    }
    this.wishlistservice
      .getAllWishlistProductsOfUser(this.Product.userid)
      .subscribe((res) => {
        this.wishlist = res;
        let flag = 0;
        for (let i = 0; i < this.wishlist.length; i++) {
          if (this.Product.productid == this.wishlist[i].product.productid) {
            flag = 1;
            alert('This product is already added in your wishlist');
            break;
          }
        }
        if (flag == 0) {
          this.service.addwishlist(this.Product).subscribe(() => {
            alert('Added to wishlist');
          });
        }
      });
  }
}
