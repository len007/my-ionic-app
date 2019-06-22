import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss']
})
export class OrdersPage {
  private userInfo = {
    avatar: "assets/svg/me/default-avt.jpg",
    name: 'Joke',
  };
  public selectedMenu = 1;
  public orders = [
    {
      id: 1,
      name: '商品名称',
      spec: 'M',
      unitPrice: 170,
      count: 2,
      totalPrice: 340,
    },
  ]
  constructor() { }

  chooseMenu(i) {
    this.selectedMenu = i;
    console.log(i);
  }
}
