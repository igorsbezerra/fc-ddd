import { OrderItem } from "./order_item";

export class Order {
  private _id: string;
  private _customeId: string;
  private _items: OrderItem[] = [];

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customeId = customerId;
    this._items = items;
  }
}
