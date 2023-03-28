import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let cats;

export default class CatsDAO {
    static async injectDB(conn) {
        if (cats) {
            return;
        }
        try {
            cats = await conn.db(process.env.ANIMALS_NS).collection("Cats");
        } catch (e) {
            console.error(
                `Unable to establish a connection handle in catsDAO: ${e}`,
            )
        }
    }

    static async getCats({
        filters = null,
        page = 0,
        catsPerPage = 20,
    } = {}) {
        let query = {}
        if (filters) {
            if ("breed" in filters) {
                query["$text"] = { $search: filters["breed"] };
            }
            if ("length" in filters) {
                query["size.length"] = { $eq: filters["length"] };
            }
            if ("coat" in filters) {
                query["coat"] = { $eq: filters["coat"] };
            }
            if ("origin" in filters) {
                query["origin"] = { $eq: filters["origin"] }
            }
            if ("talkative" in filters) {
                query["characteristics.talkative"] = { $eq: filters["talkative"] }
            }

        }
        console.log(query)
        let cursor;

        try {
            cursor = await cats.find(query);
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { cats: [], totalNumCats: 0 };
        }

        const displayCursor = cursor.limit(catsPerPage).skip(catsPerPage * page);

        try {
            const catsList = await displayCursor.toArray();
            const totalNumCats = await cats.countDocuments(query);
            return { catsList, totalNumCats };
        } catch (e) {
            console.error(
                `Unable to covert cursor to array or problem counting documents, ${e}`
            );
            return { catsList: [], totalNumCats: 0 }
        }
    }

}