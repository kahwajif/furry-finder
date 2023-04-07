import CatsDAO from "../dao/catsDAO.js"

export default class CatsController {
    static async apiGetCats(req, res, next) {
        const catsPerPage = req.query.catsPerPage ? parseInt(req.query.catsPerPage, 10) : 20;
        const page = req.query.page ? parseInt(req.query.page, 10) : 0;
        console.log(req.query)
        let filters = {};
        if (req.query.breed) {
            filters.breed = req.query.breed;
        }
        if (req.query.length) {
            filters.length = req.query.length;
        }
        if (req.query.coat) {
            filters.coat = req.query.coat;
        }
        if (req.query.grooming) {
            filters.grooming = req.query.grooming;
        }
        if (req.query.origin) {
            filters.origin = req.query.origin;
        }
        if (req.query.vocal) {
            filters.vocal = req.query.vocal;
        }
        if (req.query.energy) {
            filters.energy = req.query.energy;
        }
        if (req.query.first_time_owner) {
            filters.first_time_owner = req.query.first_time_owner;
        }

        const { catsList, totalNumCats } = await CatsDAO.getCats({
            filters,
            page,
            catsPerPage
        });

        let response = {
            cats: catsList,
            page: page,
            filters: filters,
            entries_per_page: catsPerPage,
            total_results: totalNumCats,
        }
        res.json(response);
    }

    static async apiGetCatsById(req, res, next) {
        try {
            let id = req.params.id || {};
            let cat = await CatsDAO.getCatByID(id);
            if (!cat) {
                res.status(404).json({ error: "Not Found" });
                return;
            }
            console.log(cat)
            res.json(cat);
        } catch (e) {
            console.log(`api, ${e}`);
            res.status(500).json({ error: e });
        }
    }

}