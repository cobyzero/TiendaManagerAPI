import express from 'express';
import { Category } from '../Model/category';

export const getCategoryController = async (req: express.Request, res: express.Response) => {

    const data = await Category.findAll();
    res.json(data);
};

export const setCategoryController = async (req: express.Request, res: express.Response) => {


    const { nameCategory, imageCategory } = req.body;
    await Category.create({ nameCategory, imageCategory });
    res.sendStatus(200);
};



 