import { database } from "../database";
import DataType from 'sequelize';
import { Category } from "./category";

const item = database.define("item", {

    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    nameItem: {
        type: DataType.STRING
    },
    descriptionItem: {
        type: DataType.STRING
    },
    priceItem: {
        type: DataType.DOUBLE
    },
    imageItem: {
        type: DataType.STRING
    },
    amountItem: {
        type: DataType.INTEGER
    },
    uItem: {
        type: DataType.BOOLEAN
    },
    numOrderItem:{
        type: DataType.INTEGER,
        defaultValue: 0
    }

});

Category.hasMany(item,{
    foreignKey:"categoryId",
    sourceKey:"id"
});

item.belongsTo(Category,{
    foreignKey:"categoryId",
    targetKey:"id"
})
 

export { item };