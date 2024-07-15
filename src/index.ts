import app from "./app";
import { appDataSources } from "./config/db.config";
import https from 'https';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';


dotenv.config();

const main = async () => {
    try {
        await appDataSources.initialize();

        const PORT = process.env.PORT || 5000;

        const httpsOptions = {
            key: fs.readFileSync(path.join(__dirname, '../../../../etc/nginx/ssl/nginx-selfsigned.key')),
            cert: fs.readFileSync(path.join(__dirname, '../../../../etc/nginx/ssl/nginx-selfsigned.crt'))
        };

        https.createServer(httpsOptions, app).listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
        }
    }
};

main();
