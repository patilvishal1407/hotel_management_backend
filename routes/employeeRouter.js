const employeeController = require("../controllers/employeeController");
// const emp_salaryController = require("../controllers/emp_salaryController")

const db = require('../models/index.js');
const express = require("express");
const router = require("express").Router();
const path = require('path');
const multer = require('multer');

router.use(express.urlencoded({ extended: true }));
  
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, 'Images');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
    storage: storage,
    //fileFilter: checkFileType,
});

// const upload =require("path")

// Add Employee
router.post("/addEmployee", employeeController.addEmployee);

// router.post("/addemployeedashboard/addEmployee",upload.single('Picture'), employeeController.addEmployee);

// // Get All Employees
 router.get("/getAllEmployees", employeeController.getAllEmployees);

// // Get One Employee9
// router.get("/:emp_id", employeeController.getOneEmployee);

// // Update Employee
// router.put("/updateOneEmployee/:Emp_Id", employeeController.updateEmployee);

// // Delete Employee
// router.delete("/deleteEmployee/:Emp_Id", employeeController.deleteEmployee);

// router.post("/validate/verifyOTP", employeeController.verifyOTP)

// router.post("./employee_salary_mapping", emp_salaryController.addEmployeeMapping)

/// employee salary mapping

router.post('/add_employee_salary',employeeController.addEmpSalary)

router.get("/emp_salary_details",employeeController.getEmpSalaryDetails)

router.put("/update_EmpSalary/:emp_id",employeeController.updateEmpSalary)

router.delete("/delete_AllData/:emp_id",employeeController.deleteEmployee)

module.exports = router;
