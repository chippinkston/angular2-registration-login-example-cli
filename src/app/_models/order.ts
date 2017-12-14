import { Widget} from "./widget";

export class Order {
  id: number;
  user: number;
  widgets: Widget[] = new Array();
}
