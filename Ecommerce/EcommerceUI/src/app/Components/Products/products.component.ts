import { WishlistService } from 'src/app/Services/wishlist/wishlist.service';
import { ShoppingCartService } from 'src/app/Services/shoppingcart/shopping-cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/Interface/IProducts';
import { ProductService } from 'src/app/Services/products/product.service';
import { ActivatedRoute } from '@angular/router';
import { Filter } from 'src/app/Filter';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: IProducts[] = [];
  model: any = {};
  shoppingCartList: any;
  wishlist: any;
  filter: string = '';
  SortbyParam: string = '';
  SortDirection: string = 'asc';
  searchText: string = '';
  allProductList: any;
  constructor(
    private service: ProductService,
    private route: Router,
    private shoppingcartservice: ShoppingCartService,
    private wishlistservice: WishlistService
  ) {}

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((res) => {
      this.allProductList = res;
      for (let i = 0; i < this.allProductList.length; i++) {
        if (this.allProductList[i].quantity > 0) {
          this.productList.push(this.allProductList[i]);
        }
      }
    });
  }

  public submit(prdid: any): void {
    this.model.productid = prdid;
    this.model.userid = +localStorage.getItem('userid');
    if (this.model.userid == 0) {
      this.route.navigateByUrl('/login');
    } else {
      this.model.quantity = 1;
      this.shoppingcartservice
        .getAllShoppingCartProductOfUser(this.model.userid)
        .subscribe((res) => {
          this.shoppingCartList = res;
          let flag = 0;
          for (let i = 0; i < this.shoppingCartList.length; i++) {
            if (
              this.model.productid == this.shoppingCartList[i].product.productid
            ) {
              flag = 1;
              alert('This product is already added in your shopping cart.');
              break;
            }
          }
          if (flag == 0)
            this.service.addCart(this.model).subscribe(() => {
              alert('Added to cart');
              this.route
                .navigateByUrl('/products')
                .then(() => window.location.reload());
            });
        });
    }
  }

  public submittowishlist(prdid: any): void {
    this.model.productid = prdid;
    this.model.userid = +localStorage.getItem('userid');
    if (this.model.userid == 0) {
      this.route.navigateByUrl('/login');
    }
    this.wishlistservice
      .getAllWishlistProductsOfUser(this.model.userid)
      .subscribe((res) => {
        this.wishlist = res;
        let flag = 0;
        for (let i = 0; i < this.wishlist.length; i++) {
          if (this.model.productid == this.wishlist[i].product.productid) {
            flag = 1;
            alert('This product is already added in your wishlist');
            break;
          }
        }
        if (flag == 0) {
          this.service.addwishlist(this.model).subscribe(() => {
            alert('Added to wishlist');
            this.route.navigateByUrl('/products');
          });
        }
      });
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }
  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
}
