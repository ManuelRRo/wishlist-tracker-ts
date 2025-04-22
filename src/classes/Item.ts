import Store from "./Store";

export default class Item {
    private id_ : number = 0;
    private name_: string = "";
    private price_: number = 0.00;
    private quantity_: number = 0
    private store_ : Store = new Store();

    set id(newId: number){
        this.id_ = newId;
    }

    set name(newName: string) {
        this.name_ = newName;
    }

    set price(newPrice: number) {
        this.price_ = newPrice;
    }

    set quantity(newQ: number){
        this.quantity_ = newQ;
    }

    set store(newStore: Store){
        this.store_ = newStore;
    }


    get name():string{
        return this.name_;
    }
    
    get price():number {
        return this.price_;
    }

    get quantity(): number {
        return this.quantity_;
    }

    get id():number{
        return this.id_;
    }

    getStoreName(): string {
        return this.store_.name_;
    }
}