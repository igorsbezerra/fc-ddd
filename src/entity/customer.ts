import { Address } from "./address";

export class Customer {
  _id: string;
  _name: string;
  _address!: Address;
  _active: boolean = false;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
  }

  changeName(name: string) {
    this._name = name;
  }

  activate() {
    if (this._address === undefined)
      throw new Error("Address is mandatory to activate a customer");
    this._active = true;
  }

  deactivete() {
    this._active = false;
  }

  set Address(address: Address) {
    this._address = address;
  }
}
