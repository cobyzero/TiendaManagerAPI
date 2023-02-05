"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerItem = void 0;
const express_1 = require("express");
const itemController_1 = require("../Controller/itemController");
exports.routerItem = (0, express_1.Router)();
exports.routerItem.post("/api/getItemForId", itemController_1.getItemforIdController);
