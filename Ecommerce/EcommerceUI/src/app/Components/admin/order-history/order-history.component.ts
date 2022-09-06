import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent implements OnInit {
  public orderList: any;
  constructor(private service: OrderService) {}

  ngOnInit(): void {
    this.service.getAllOrders().subscribe((res) => {
      this.orderList = res;
    });
  }
}
