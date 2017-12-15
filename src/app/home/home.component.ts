import { Component, OnInit } from '@angular/core';

import { Order, User, Widget, OrderWidget } from '../_models/';
import { OrderService, UserService, WidgetService } from '../_services/';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    currentOrder: Order;
    userOrders: Order[] = [];
    widgets: Widget[] = [];

    constructor(
      private orderService: OrderService,
      private userService: UserService,
      private widgetService: WidgetService
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadUserOrders();
        this.widgets = this.widgetService.getWidgets();
    }

    createOrder(): void {
      this.currentOrder = {};
      this.currentOrder.user = this.currentUser.id;
      this.currentOrder.widgets = [];
      console.log(this.currentOrder);
    }

    addToOrder(widget: number): void {
      if(this.currentOrder === undefined){
        this.createOrder();
      }
      let newWidget: Widget = {};
        newWidget.id = 1;
        newWidget.name = 'Tmp';
        newWidget.price = 5.55;
      let newOrderWidget: OrderWidget = {};
        newOrderWidget.widget = newWidget;
        newOrderWidget.quantity = 1;
      this.currentOrder.widgets.push(newOrderWidget);
      console.log(this.currentOrder);
    }



    private loadUserOrders() {
        this.userService.getUsers().subscribe(users => { this.users = users; });
    }
}
