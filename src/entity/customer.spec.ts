import { Address } from "./address";
import { Customer } from "./customer";

describe("Customer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Customer("", "John");
    }).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new Customer("1", "");
    }).toThrowError("Name is required");
  });

  it("should change name", () => {
    const customer = new Customer("123", "John");

    customer.changeName("Jane");

    expect(customer.name).toBe("Jane");
  });

  it("should activate customer", () => {
    const customer = new Customer("123", "Customer 1");
    const address = new Address("Rua 2", 2, "12345-678", "São Paulo");
    customer.Address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);
  });

  it("should deactivate customer", () => {
    const customer = new Customer("123", "Customer 1");

    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  });

  it("should throw error when address is undefined when you activate a customer", () => {
    expect(() => {
      const customer = new Customer("123", "Customer 1");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  });

  it("should rewards is initialized", () => {
    const customer = new Customer("1", "Customer 1");

    expect(customer.rewardPoints).toBe(0);
  });

  it("should add reward points", () => {
    const customer = new Customer("1", "Customer 1");

    customer.addRewardPoints(10);

    expect(customer.rewardPoints).toBe(10);
  });

  it("should add multiplos reward points", () => {
    const customer = new Customer("1", "Customer 1");

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
