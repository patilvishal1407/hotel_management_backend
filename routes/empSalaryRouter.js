const empSalaryController=require("../controllers/empSalaryController");

const db=require('../models/index.js')
const router6= require("express").Router();

// add Booking Details
router6.post("/addEmployeeSalary", empSalaryController.addEmployeeSalary,);

// Get All Booking Details
router6.get("/getAllEmployeeSalary", empSalaryController.getAllEmployeesSalary);

// Get One Booking Details
router6.get("/:Emp_Id", empSalaryController.getOneEmployeeSalary);

// update customers
router6.put("/updateOneEmployeeSalary/:Emp_Id", empSalaryController.updateEmployeeSalary);

// // delete customers
router6.delete("/deleteEmployeeSalary/:Emp_Id", empSalaryController.deleteEmployeeSalary);

module.exports = router6;

   