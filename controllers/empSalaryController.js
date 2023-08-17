const db = require('../models');
const { QueryTypes, Model } = require('sequelize');

const EmployeeSalary = db.emp_salary;

// Add Bookings
const addEmployeeSalary = async (req, res) => {
   let info = {
      emp_id: req.body.emp_id,
      emp_name: req.body.emp_name,
      salary_amt: req.body.salary_amt,
      leaves: req.body.leaves,
      account_no: req.body.account_no,
      ifsc_code: req.body.ifsc_code,
      pf_amt: req.body.pf_amt,
      esi: req.body.esi
  };
  
const employeeSalary = await EmployeeSalary.create(info)
   res.status(200).send(employeeSalary)
   console.log(employeeSalary)
}

//Get All Bookings
const getAllEmployeesSalary=async(req,res)=>{
   let allemployeeSalary=await EmployeeSalary.findAll({})
  res.status(200).send(allemployeeSalary);
}

//Get One Bookings
const getOneEmployeeSalary=async(req,res)=>{
   let Id=req.params.Emp_Id
    let oneemployeeSalary=await EmployeeSalary.findOne({where: {Emp_Id: Id}})
    res.status(200).send(oneemployeeSalary)
    console.log(oneemployeeSalary)
 }

 const updateEmployeeSalary=async(req,res)=>{
   let Id=req.params.Emp_Id
   const updateemployeeSalary=await EmployeeSalary.update(req.body,{where: {Emp_Id : Id}})
   res.status(200).send(updateemployeeSalary)
   console.log(updateemployeeSalary)
}

const deleteEmployeeSalary=async(req,res)=>{
   let id=req.params.Emp_Id
  await EmployeeSalary.destroy({where: {Emp_Id: id}})
   res.status(200).send("employeeSalary is Deleted ")
   console.log("employeeSalary is Deleted " )
}

module.exports = {
   addEmployeeSalary,
   getAllEmployeesSalary,
   getOneEmployeeSalary,
   updateEmployeeSalary,
   deleteEmployeeSalary
}