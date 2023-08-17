const foodOrderController=require("../controllers/foodOrderController.js");

const db=require('../models/index.js')
const router7 = require("express").Router();

router7.post("/addFoodOrder", foodOrderController.addFoodOrder);

router7.get("/getAllFoodOrder", foodOrderController.getAllFoodOrder);

router7.get("/:Food_Type_Id", foodOrderController.getOneFoodOrder);

router7.put("/updateoneFoodOrder/:Food_Type_Id", foodOrderController.updateFoodOrder);

router7.delete("/deleteFoodOrder/:Food_Type_Id", foodOrderController.deleteFoodOrder);

module.exports = router7;


