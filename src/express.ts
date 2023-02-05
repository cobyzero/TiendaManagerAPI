import express from 'express';
import { routerHome } from './Route/home';
import { routerUsers } from './Route/users';
import { routerItem } from './Route/item';

const app = express();
app.use(express.json());
app.use(express.text());

app.use(routerHome);
app.use(routerUsers);
app.use(routerItem);
export { app };