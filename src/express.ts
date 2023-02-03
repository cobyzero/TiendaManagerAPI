import express from 'express';
import { routerHome } from './Route/home';

const app = express();
app.use(express.json());
app.use(express.text());

app.use(routerHome);

export { app };