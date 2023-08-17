const customersController=require("../controllers/customersController");

const db=require('../models/index.js')
const router2 = require("express").Router();

// add Booking Details
router2.post("/addCustomers", customersController.addCustomers);

// Get All Booking Details
router2.get("/getAllCustomers", customersController.getAllCustomers);

// Get One Booking Details
router2.get("/:Customer_Id", customersController.getOneCustomer);

// update customers
router2.put("/updateOneCustomer/:Customer_Id", customersController.updateCustomer);

// // delete customers
router2.delete("/deleteCustomer/:Customer_Id", customersController.deleteCustomer);

router2.get("/Login/customerTable", customersController.customerTable);

module.exports = router2;
