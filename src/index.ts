import { database } from "./database";
import { app } from "./express";
import "./Model/category";
import "./Model/item";
import "./Model/users";

async function main() {

    await database.sync({ force: false, alter: true });
    await app.listen(80);

}


main();