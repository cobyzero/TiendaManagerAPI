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



export const getCategoryForIdController = async (req: express.Request, res: express.Response) => {

    const json = JSON.parse(req.body);
    const { id } = json;

    const data = await Category.findOne({
        where: {
            id,
        }
    });

    if (data == null) {
        res.sendStatus(404);
    }
    res.json(data);

};