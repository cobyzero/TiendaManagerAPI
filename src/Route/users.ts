import { Router } from "express";
import { getDataforIdController, getLoginController, setLoginController } from "../Controller/usersController";

export const routerUsers = Router();

routerUsers.post("/api/users/getLogin", getLoginController);

routerUsers.post("/api/users/setLogin",setLoginController);

routerUsers.get("/api/users/getData/:id",getDataforIdController);