"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUsers = void 0;
const express_1 = require("express");
const usersController_1 = require("../Controller/usersController");
exports.routerUsers = (0, express_1.Router)();
exports.routerUsers.post("/api/users/getLogin", usersController_1.getLoginController);
exports.routerUsers.post("/api/users/setLogin", usersController_1.setLoginController);
exports.routerUsers.get("/api/users/getData/:id", usersController_1.getDataforIdController);
