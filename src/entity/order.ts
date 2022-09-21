import { OrderItem } from "./order_item";

export class Order {
  _id: string;
  _customeId: string;
  _items: OrderItem[] = [];

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customeId = customerId;
    this._items = items;
  }
}
