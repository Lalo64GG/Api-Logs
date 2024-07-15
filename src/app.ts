import "reflect-metadata";
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv'
import Record  from "./routes/Record.routes";
import Table from "./routes/Table.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/record', Record)
app.use('/table', Table)

export default app;