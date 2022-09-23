import { Order } from "./order";
import { OrderItem } from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Order("", "123", []);
    }).toThrowError("Id is required");
  });
  it("should throw error when customerId is empty", () => {
    expect(() => {
      new Order("123", "", []);
    }).toThrowError("CustomerId is required");
  });
  it("should throw error when item is empty", () => {
    expect(() => {
      new Order("123", "123", []);
    }).toThrowError("Items are required");
  });
  it("should calculate total", () => {
    const item = new OrderItem("1", "Mouse", 100, "p1", 2);
    const order = new Order("1", "1", [item]);

    const total = order.total();

    expect(total).toBe(200);
  });
  it("should calculate total with two items", () => {
    const item = new OrderItem("1", "Mouse", 100, "p1", 2);
    const item2 = new OrderItem("1", "Mouse", 200, "p2", 2);
    const order = new Order("1", "1", [item, item2]);

    const total = order.total();

    expect(total).toBe(600);
  });
  it("should throw error if the item qtd is less or equal zero", () => {
    expect(() => {
      const item = new OrderItem("1", "Mouse", 100, "p1", 0);
      new Order("1", "1", [item]);
    }).toThrowError("Quantity must be greater than 0");
  });
});
