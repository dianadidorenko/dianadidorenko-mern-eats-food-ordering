import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

// /api/restaurant/search/london
router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City parametr must be a valid string"),
  RestaurantController.searchRestaurant
);

router.get(
  "/:restaurantId",
  param("restaurant")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("RestaurantId parametr must be a valid string"),
  RestaurantController.getRestaurant
);

export default router;
