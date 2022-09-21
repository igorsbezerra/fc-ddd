import { Address } from "./entity/address";
import { Customer } from "./entity/customer";
import { Order } from "./entity/order";
import { OrderItem } from "./entity/order_item";

let customer = new Customer("123", "Igor de Souza Bezerra");
const address = new Address("Rua 2", 2, "12345-678", "São Paulo");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Mouse", 10);
const item2 = new OrderItem("1", "Headset", 15);

const order = new Order("1", "123", [item1, item2]);
