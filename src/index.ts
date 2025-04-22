import Item from "./classes/Item";
import List from "./classes/List";
import Store from "./classes/Store";
import File from "./classes/File";
import ItemInterface from "./interfaces/ItemInterface";

async function main(): Promise<undefined> {

    const jsonFile = new File();
    const store = new Store();

    const contentJson : string = await jsonFile.readContent();
    
    const wishlistObject  = JSON.parse(contentJson);

    let dev = {
        name : "NEW HAT",
        price : 23.23,
        store : store
    }

    let newEmployee: ItemInterface = dev;

    function item (ittem : ItemInterface) {
        ittem.name = "NEW HAT";
        ittem.price = 23.23;
        ittem.store = store;
        return `Hello ${ittem.name}`;
    };

    console.log(item(dev));


}



main();