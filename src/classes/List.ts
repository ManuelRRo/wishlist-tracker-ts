import Item from "./Item";

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import File from "./File";


export default class List {

    private header_: string = "";

    private items : Item = new Item();

    set header(newHeader:string){
        this.header_ = newHeader;
    }

    get header():string {
        return this.header_;
    }


    async addItem() {
        try {
            // const jsonFile : File = new File();
            
            // const name_ =  await getUserAnswer("Name item: ~:/ ");
            // const price_ = await getUserAnswer("Price item: ~:/ ");
            // const store_ = await getUserAnswer("Store item: ~:/ ");
            
            // //read current data and convert to object
            // const content : object | undefined =  JSON.parse(await jsonFile.readContent());
            // //new item object id must be generate auto from last index
            // const newItem = {
            //     id: content.wishlist.lastIndex + 1,
            //     name: name_,
            //     price: Number(price_),
            //     store: store_
            // }
            // receivedData.wishlist.lastIndex++;
            // //add new item to wishlist items
            // receivedData.wishlist.items.push(newItem);

            // //write into to wishlist.json
            // await writeContentToFile(receivedData);
    
        } catch (err: any) {
            console.error("Some error\n ", err.message);
        }
    
        return 1;
    }

    async getUserAnswer(msg:string) {
        const rl = readline.createInterface({ input, output });
        //TODO 1: Read user input
        const answer = await rl.question(msg);
        rl.close();
        return answer;
    }
}