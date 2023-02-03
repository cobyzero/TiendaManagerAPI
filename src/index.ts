import { database } from "./database";
import { app } from "./express";
import "./Model/category";
import "./Model/item";

async function main() {

    await database.sync({ force: false, alter: true });
    await app.listen(80);

}


main();