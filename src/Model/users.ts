import { database } from "../database";
import { DataTypes } from "sequelize";

export const Users = database.define("Users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nameUsers:{
        type: DataTypes.STRING
    },
    usernameUsers:{
        type: DataTypes.STRING,
    },
    passwordUsers:{
        type: DataTypes.STRING,
    },

});