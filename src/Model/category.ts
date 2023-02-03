import { database } from "../database";
import DataType from 'sequelize';
const Category = database.define("category", {

    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nameCategory: {
        type: DataType.STRING,
    },
    imageCategory: {
        type: DataType.STRING,
    },

});


export { Category };