import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import CatsDAO from "./dao/catsDAO.js";

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(
    process.env.ANIMALS_DB_URI,
    {
        maxPoolSize: 50, //how many people can access the site
        wtimeoutMS: 2500,
        useNewUrlParser: true,
    }
)
    .catch(err => {
        console.error(err.stack);
        process.exit(1);
    })
    .then(async client => {
        await CatsDAO.injectDB(client);
        // await ReviewsDAO.injectDB(client);
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        });
    });