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
        if (req.query.origin) {
            filters.origin = req.query.origin;
        }
        if (req.query.talkative) {
            filters.talkative = req.query.talkative;
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