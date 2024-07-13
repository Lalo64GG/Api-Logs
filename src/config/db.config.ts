import { DataSource } from "typeorm";
import { Record } from "../entities/Record.entities";

export const appDataSources = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Lolasso1012",
    database: "records",
    entities: [Record],
    logging: true,
    synchronize: true,
    migrations: ['dist/migration/**/*.js'],
     migrationsTableName: "custom_migration_table",
});