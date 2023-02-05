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
exports.getCategoryForIdController = exports.setCategoryController = exports.getCategoryController = void 0;
const category_1 = require("../Model/category");
const getCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield category_1.Category.findAll();
    res.json(data);
});
exports.getCategoryController = getCategoryController;
const setCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nameCategory, imageCategory } = req.body;
    yield category_1.Category.create({ nameCategory, imageCategory });
    res.sendStatus(200);
});
exports.setCategoryController = setCategoryController;
const getCategoryForIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const json = JSON.parse(req.body);
    const { id } = json;
    const data = yield category_1.Category.findOne({
        where: {
            id,
        }
    });
    if (data == null) {
        res.sendStatus(404);
    }
    res.json(data);
});
exports.getCategoryForIdController = getCategoryForIdController;
