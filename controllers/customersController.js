const db = require('../models');
const { QueryTypes, Model } = require('sequelize');

const Customers = db.customers;

// Add Bookings
const addCustomers = async (req, res) => {
   let info = {
      customer_id: req.body.customer_id,
      customer_name: req.body.customer_name,
      phone: req.body.phone,
      govt_id: req.body.govt_id,
      gender: req.body.gender,
      age: req.body.age,
      room_no: req.body.room_no,
      booking_id: req.body.booking_id,
      previous_customer: req.body.previous_customer,
  };

const customers = await Customers.create(info)
   res.status(200).send(customers)
   console.log(customers)
}

//Get All Bookings
const getAllCustomers=async(req,res)=>{
   let allcustomers=await Customers.findAll({})
  res.status(200).send(allcustomers);
}

//Get One Bookings
const getOneCustomer=async(req,res)=>{
   let Id=req.params.Customer_Id
    let onecustomers=await Customers.findOne({where: {Customer_Id: Id}})
    res.status(200).send(onecustomers)
    console.log(onecustomers)
 }

 const updateCustomer=async(req,res)=>{
   let Id=req.params.Customer_Id
   const updatecustomer=await Customers.update(req.body,{where: {Customer_Id : Id}})
   res.status(200).send(updatecustomer)
   console.log(updatecustomer)
}

const deleteCustomer=async(req,res)=>{
   let id=req.params.Customer_Id
  await Customers.destroy({where: {Customer_Id: id}})
   res.status(200).send("customer is Deleted ")
   console.log("customer is Deleted " )
}


const customerTable = async (req, res) => {
   try {
      const query = 'SELECT * FROM customers';
      const employeesData = await Customers.sequelize.query(query, {
         type: QueryTypes.SELECT,
      });

      const customers = employeesData.map(row => ({
         Customer_Id: row.Customer_Id,
         Customer_Name: row.Customer_Name,
         Phone: row.Phone,
         Gender: row.Gender,
         Age:row.Age
      }));
      
      res.json(customers);
   } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};
module.exports = {
   addCustomers,
   getAllCustomers,
   getOneCustomer,
   updateCustomer,
   deleteCustomer,
   customerTable
}