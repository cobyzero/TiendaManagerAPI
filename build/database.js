"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const sequelize_1 = require("sequelize");
const database = new sequelize_1.Sequelize("managerapp", "root", "infierno", {
    host: "localhost",
    dialect: "mysql"
});
exports.database = database;
