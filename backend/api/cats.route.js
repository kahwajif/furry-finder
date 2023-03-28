import express from "express";
import CatsCtrl from "./cats.controller.js";
const router = express.Router();

router
    .route("/cats").get(CatsCtrl.apiGetCats);
// .post(ReviewsCtrl.apiPostReview)
// .put(ReviewsCtrl.apiUpdateReview)
// .delete(ReviewsCtrl.apiDeleteReview)
export default router;