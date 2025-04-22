"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Store_1 = __importDefault(require("./Store"));
class Item {
    constructor() {
        this.id_ = 0;
        this.name_ = "";
        this.price_ = 0.00;
        this.quantity_ = 0;
        this.store_ = new Store_1.default();
    }
    set id(newId) {
        this.id_ = newId;
    }
    set name(newName) {
        this.name_ = newName;
    }
    set price(newPrice) {
        this.price_ = newPrice;
    }
    set quantity(newQ) {
        this.quantity_ = newQ;
    }
    set store(newStore) {
        this.store_ = newStore;
    }
    get name() {
        return this.name_;
    }
    get price() {
        return this.price_;
    }
    get quantity() {
        return this.quantity_;
    }
    get id() {
        return this.id_;
    }
    getStoreName() {
        return this.store_.name_;
    }
}
exports.default = Item;
//# sourceMappingURL=Item.js.map