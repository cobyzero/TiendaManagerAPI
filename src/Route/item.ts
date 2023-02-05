import { Router } from "express";
import { getItemforIdController } from "../Controller/itemController";

export const routerItem = Router(); 

routerItem.post("/api/getItemForId",getItemforIdController);