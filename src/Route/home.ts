import { getCategoryController, setCategoryController } from "../Controller/categoryController";
import { Router } from "express";
import { getItemController, getItemPopularController, getItemforCategoryController, setItemController } from "../Controller/itemController";

const routerHome = Router();

routerHome.get("/api/getCategory", getCategoryController);
routerHome.post("/api/setCategory", setCategoryController);

routerHome.post("/api/setItem",setItemController);

routerHome.get("/api/getItem",getItemController);
routerHome.get("/api/getItemPopular",getItemPopularController);
routerHome.get("/api/getItemforCategory/:categoryId",getItemforCategoryController);

export { routerHome };