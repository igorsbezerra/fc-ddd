import { Product } from "../entity/product";
import { ProductService } from "./product.service";

describe("Order service unit test", () => {
  it("should change the prices of all products", () => {
    const productOne = new Product("id", "Product 1", 10);
    const productTwo = new Product("id", "Product 1", 20);
    const products = [productOne, productTwo];

    ProductService.increasePrice(products, 100);

    expect(productOne.price).toBe(20);
    expect(productTwo.price).toBe(40);
  });
});
