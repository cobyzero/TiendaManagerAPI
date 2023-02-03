import { Sequelize, DataType } from "sequelize";

const database = new Sequelize("managerapp", "root", "infierno", {
    host: "localhost",
    dialect: "mysql"
});

export { database };