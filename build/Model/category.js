"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const database_1 = require("../database");
const sequelize_1 = __importDefault(require("sequelize"));
const Category = database_1.database.define("category", {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nameCategory: {
        type: sequelize_1.default.STRING,
    },
    imageCategory: {
        type: sequelize_1.default.STRING,
    },
});
exports.Category = Category;
