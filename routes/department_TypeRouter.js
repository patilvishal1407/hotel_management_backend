const department_TypeController=require("../controllers/department_TypeController.js");

const db=require('../models/index.js')
const router1 = require("express").Router();

// add Booking Details
router1.post("/addDepartments", department_TypeController.addDepartment);

// Get All Booking Details
router1.get("/getAllDepartments", department_TypeController.getAllDepartments);

// Get One Booking Details
router1.get("/:Dept_Id", department_TypeController.getOneDepartment);

// update customers
router1.put("/updateOneDepartment/:Dept_Id", department_TypeController.updateDepartment);

// // delete customers
router1.delete("/deleteDepartment/:Dept_Id", department_TypeController.deleteDepartment);

router1.get("/getDepartments/getRoleName", department_TypeController.getRoleName);

router1.get("/getDepartments/getDeptId", department_TypeController.getDeptId);



module.exports = router1;

