const foodMenuController=require("../controllers/foodMenuController.js");

const db=require('../models/index.js')
const router5 = require("express").Router();

// add Booking Details
router5.post("/addFoodMenu", foodMenuController.addFoodMenu);

// Get All Booking Details
router5.get("/getAllFoodMenu", foodMenuController.getAllFoodMenu);

// Get One Booking Details
router5.get("/:Food_Type_Id", foodMenuController.getOneFoodMenu);

// update customers
router5.put("/updateoneFoodMenu/:Food_Type_Id", foodMenuController.updateFoodMenu);

// // delete customers
router5.delete("/deleteFoodMenu/:Food_Type_Id", foodMenuController.deleteFoodMenu);

module.exports = router5;


