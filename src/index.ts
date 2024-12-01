import app from "./app";
import { appDataSources } from "./config/db.config";
import http from 'http';
import dotenv from 'dotenv';
import cluster from 'cluster';
import os from 'os';

dotenv.config();

const main = async () => {
    try {
        await appDataSources.initialize();

        const PORT = process.env.PORT || 5000;

        // Si estamos en el proceso maestro, creamos un proceso para cada núcleo de CPU
        if (cluster.isMaster) {
            const numCPUs = os.cpus().length; // Número de CPUs disponibles

            // Crea un worker por cada CPU
            for (let i = 0; i < numCPUs; i++) {
                cluster.fork();
            }

            cluster.on('exit', (worker, code, signal) => {
                console.log(`Worker ${worker.process.pid} died`);
            });
        } else {
            // En los workers, creamos el servidor HTTP
            http.createServer(app).listen(PORT, () => {
                console.log(`Worker ${process.pid} - Server listening on port ${PORT}`);
            });
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
        }
    }
};

main();
