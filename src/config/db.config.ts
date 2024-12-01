import { DataSource } from "typeorm";
import { Record } from "../entities/Record.entities";
import { Table } from "../entities/Table.entities";

export const appDataSources = new DataSource({
    type: "postgres",
    host: process.env.HOST,
    port: 5432,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: "logs",
    entities: [Record, Table],
    migrations: [__dirname + "/migrations/*.ts"],  // Ruta a las migraciones
    logging: true,
    synchronize: true,
});
