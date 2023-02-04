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
exports.getDataforIdController = exports.setLoginController = exports.getLoginController = void 0;
const users_1 = require("../Model/users");
const getLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const json = JSON.parse(req.body);
    const { usernameUsers, passwordUsers } = json;
    const data = yield users_1.Users.findOne({
        where: {
            usernameUsers,
            passwordUsers,
        },
        attributes: ["id"]
    });
    if (data != null) {
        res.json(data.getDataValue("id"));
    }
    else {
        res.sendStatus(404);
    }
});
exports.getLoginController = getLoginController;
const setLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nameUsers, usernameUsers, passwordUsers } = req.body;
    yield users_1.Users.create({
        nameUsers,
        usernameUsers,
        passwordUsers
    });
    res.sendStatus(200);
});
exports.setLoginController = setLoginController;
const getDataforIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield users_1.Users.findByPk(id);
    console.log(data);
    res.json(data);
});
exports.getDataforIdController = getDataforIdController;
