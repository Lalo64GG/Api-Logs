import app from "./app";
import { appDataSources } from "./config/db.config";

const main = async() => {
    try {
        await appDataSources.initialize();
        const PORT = process.env.PORT || 5000
        app.listen(PORT)
        console.log("Server listening on port", PORT)
    } catch (error) {
        console.log(error)
    }
};

main();