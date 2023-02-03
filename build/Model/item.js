"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.item = void 0;
const database_1 = require("../database");
const sequelize_1 = __importDefault(require("sequelize"));
const category_1 = require("./category");
const item = database_1.database.define("item", {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nameItem: {
        type: sequelize_1.default.STRING
    },
    descriptionItem: {
        type: sequelize_1.default.STRING
    },
    priceItem: {
        type: sequelize_1.default.DOUBLE
    },
    imageItem: {
        type: sequelize_1.default.STRING
    },
    amountItem: {
        type: sequelize_1.default.INTEGER
    },
    uItem: {
        type: sequelize_1.default.BOOLEAN
    },
    numOrderItem: {
        type: sequelize_1.default.INTEGER,
        defaultValue: 0
    }
});
exports.item = item;
category_1.Category.hasMany(item, {
    foreignKey: "categoryId",
    sourceKey: "id"
});
item.belongsTo(category_1.Category, {
    foreignKey: "categoryId",
    targetKey: "id"
});
