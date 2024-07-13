import { DataSource } from "typeorm";
import { Record } from "../entities/Record.entities";

export const appDataSources = new DataSource({
    type: "postgres",
    host: process.env.HOST,
    port: 5432,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: "records",
    entities: [Record],
    logging: true,
    synchronize: true,
    ssl: {
        rejectUnauthorized: false,
    },
});