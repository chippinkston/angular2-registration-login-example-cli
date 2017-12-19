import { OrderWidget } from './order-widget'

export class Order {
  id: number;
  user: number;
  widgets: OrderWidget[] = new Array();
}
