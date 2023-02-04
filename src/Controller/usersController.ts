import express, { json } from 'express';
import { Users } from '../Model/users';

export const getLoginController = async (req: express.Request, res: express.Response) => {

    const json = JSON.parse(req.body);

    const { usernameUsers, passwordUsers } = json;

    const data = await Users.findOne({
        where: {
            usernameUsers,
            passwordUsers,
        },
        attributes: ["id"]

    });

    if (data != null) {
        res.json(data.getDataValue("id"));

    } else {
        res.sendStatus(404);
    }
};

export const setLoginController = async (req: express.Request, res: express.Response) => {

    const { nameUsers, usernameUsers, passwordUsers } = req.body;

    await Users.create({
        nameUsers,
        usernameUsers,
        passwordUsers
    });

    res.sendStatus(200);
};


export const getDataforIdController = async (req: express.Request, res: express.Response) => {

    const id = req.params.id;

    const data = await Users.findByPk(id);
    console.log(data); 
    res.json(data);
};