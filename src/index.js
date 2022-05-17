import express from 'express';
import morgan from 'morgan';
import router from './routes.js';
import Food from './database/Food.js';
import cors from "cors";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';


const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(cookieParser());

app.use(express.json());

app.use(morgan('tiny'));

app.use(express.static('public'));

//login



app.use(router);

Food.loadSeed();

app.listen(3000, () => console.log('Server is running!'));