import CatsDAO from "../dao/catsDAO.js"

export default class CatsController {
    static async apiGetCats(req, res, next) {
        const catsPerPage = req.query.catsPerPage ? parseInt(req.query.catsPerPage, 10) : 20;
        const page = req.query.page ? parseInt(req.query.page, 10) : 0;

        let filters = {};
        if (req.query.breed) {
            filters.breed = req.query.breed;
        } else if (req.query.length) {
            filters.length = req.query.length;
        } else if (req.query.coat_length) {
            filters.coat_length = req.query.coat_length;
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
}