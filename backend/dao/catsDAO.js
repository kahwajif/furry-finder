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
        let query
        if (filters) {
            if ("breed" in filters) {
                query = { $text: { $search: filters["breed"] } };
            } else if ("length" in filters) {
                query = { "size.length": { $eq: filters["length"] } };
            } else if ("coat_length" in filters) {
                query = { "address.zipcode": { $eq: filters["zipcode"] } };
            }
        }

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