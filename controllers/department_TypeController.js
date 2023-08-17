const db = require('../models');
const { QueryTypes, Model } = require('sequelize');

const Dept_Type = db.department_type;

// Add Bookings
const addDepartment = async (req, res) => {
   let info = {
      dept_id: req.body.dept_id,
      dept_type: req.body.dept_type,
      role_name: req.body.role_name,
      role_id: req.body.role_id,
  };
  
const departments = await Dept_Type.create(info)
   res.status(200).send(departments)
   console.log(departments)
}

//Get All Bookings
const getAllDepartments=async(req,res)=>{
   let alldepartments=await Dept_Type.findAll({})
  res.status(200).send(alldepartments);
}

//Get One Bookings
const getOneDepartment=async(req,res)=>{
   let Id=req.params.Dept_Id
    let onedepartments=await Dept_Type.findOne({where: {Dept_Id: Id}})
    res.status(200).send(onedepartments)
    console.log(onedepartments)
 }

 const updateDepartment=async(req,res)=>{
   let Id=req.params.Dept_Id
   const updatedepartment=await Dept_Type.update(req.body,{where: {Dept_Id : Id}})
   res.status(200).send(updatedepartment)
   console.log(updatedepartment)
}

const deleteDepartment=async(req,res)=>{
   let id=req.params.Dept_Id
  await Dept_Type.destroy({where: {Dept_Id: id}})
   res.status(200).send("Dept_Type is Deleted ")
   console.log("Dept_Type is Deleted " )
}

const getRoleName = async (req, res) => {
   try {
     const query = 'SELECT DISTINCT Role_Name FROM `department_types`';
     const employeesData = await Dept_Type.sequelize.query(query, {
       type: QueryTypes.SELECT,
     });
     res.status(200).json({ employeesData });
   } catch (error) {
     console.error('Error executing query:', error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 };

const getDeptId= async (req, res) => {
   try {
      const query = 'SELECT DISTINCT Dept_Id FROM `department_types`';

      const employeesData = await Dept_Type.sequelize.query(query, {
         type: QueryTypes.SELECT,
      });
      res.status(200).json({ employeesData });
   } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

module.exports = {
   addDepartment,
   getAllDepartments,
   getOneDepartment,
   updateDepartment,
   deleteDepartment,
   getDeptId,
   getRoleName
}