import path from 'path';
import * as fs from 'fs';

const outputFilePath = path.join(process.cwd(), 'wishlist.json');

export default class File {

    private path_ = "";

    async writeContent(content: string) {

        try {
            console.log("Writting ...");
            await fs.writeFileSync(outputFilePath, JSON.stringify(content));
            console.log("Saved.");
        } catch (err) {
            console.log("Error writing wishlist.json\n", err);
            return 0;
        }
    }

    async readContent(filePath: string = outputFilePath): Promise<string | any> {
        const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });
        try {
            for await (const chunk of readStream) {
                return chunk;
            }

        } catch (error: any) {
            console.error(`Error reading file: ${error.message}`);
        }
    }

}