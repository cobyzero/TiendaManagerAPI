import express from 'express';
import { item } from '../Model/item';

/**
 * Get
 */
export const getItemController = async (req: express.Request, res: express.Response) => {

    const data = await item.findAll();
    res.json(data);
};

export const getItemPopularController = async (req: express.Request, res: express.Response) => {

    const data = await item.findAll({
        limit: 2,
        order: [
            ["numOrderItem", "DESC"]
        ]
    });

    res.json(data);
}

export const getItemforCategoryController = async (req: express.Request, res: express.Response) => {

    const categoryId = req.params.categoryId;
    const data = await item.findAll({
        where: {
            categoryId: categoryId,
        }
    });

    res.json(data);
}
/**
 * Set
 */
export const setItemController = async (req: express.Request, res: express.Response) => {

    const { nameItem, descriptionItem, priceItem, imageItem, amountItem, uItem } = req.body;

    await item.create({
        nameItem, descriptionItem, priceItem, imageItem, amountItem, uItem
    });

    res.sendStatus(200);
}

