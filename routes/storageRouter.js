const storageController=require("../controllers/storageController.js");

const db=require('../models/index.js')
const router9 = require("express").Router();

router9.post("/addproducts", storageController.addStore);

router9.get("/getAllproducts", storageController.getAllStore);

router9.get("/:product_Id", storageController.getOneStore);

router9.put("/updateoneStore/:product_Id", storageController.updateStore);

router9.delete("/deleteStore/:product_Id", storageController.deleteStore);

module.exports = router9;