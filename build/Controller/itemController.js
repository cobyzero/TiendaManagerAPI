"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setItemController = exports.getItemforCategoryController = exports.getItemPopularController = exports.getItemController = void 0;
const item_1 = require("../Model/item");
/**
 * Get
 */
const getItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield item_1.item.findAll();
    res.json(data);
});
exports.getItemController = getItemController;
const getItemPopularController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield item_1.item.findAll({
        limit: 2,
        order: [
            ["numOrderItem", "DESC"]
        ]
    });
    res.json(data);
});
exports.getItemPopularController = getItemPopularController;
const getItemforCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = req.params.categoryId;
    const data = yield item_1.item.findAll({
        where: {
            categoryId: categoryId,
        }
    });
    res.json(data);
});
exports.getItemforCategoryController = getItemforCategoryController;
/**
 * Set
 */
const setItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nameItem, descriptionItem, priceItem, imageItem, amountItem, uItem } = req.body;
    yield item_1.item.create({
        nameItem, descriptionItem, priceItem, imageItem, amountItem, uItem
    });
    res.sendStatus(200);
});
exports.setItemController = setItemController;
