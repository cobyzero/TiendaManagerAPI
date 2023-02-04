"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const database_1 = require("../database");
const sequelize_1 = require("sequelize");
exports.Users = database_1.database.define("Users", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nameUsers: {
        type: sequelize_1.DataTypes.STRING
    },
    usernameUsers: {
        type: sequelize_1.DataTypes.STRING,
    },
    passwordUsers: {
        type: sequelize_1.DataTypes.STRING,
    },
});
