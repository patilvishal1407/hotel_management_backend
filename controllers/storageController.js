const db = require('../models');
const { QueryTypes, Model } = require('sequelize');

const Store = db.store;

// Add Roomtypes
const addStore = async (req, res) => {
   let info = {
      dept_id: req.body.dept_id,
      product_id: req.body.product_id,
      product_name: req.body.product_name,
      price_product: req.body.price_product,
      no_quantity: req.body.no_quantity,
      total_price: req.body.total_price
  };
  
const addStore = await Store.create(info)
   res.status(200).send(addStore)
   console.log(addStore)
}

//Get All Roomtypes
const getAllStore=async(req,res)=>{
   let allStore=await Store.findAll({})
  res.status(200).send(allStore);
}

//Get One Roomtypes
const getOneStore=async(req,res)=>{
   let Id=req.params.product_Id
    let oneStore=await Store.findOne({where: {product_id: Id}})
    res.status(200).send(oneStore)
    console.log(oneStore)
 }

//Update One Roomtypes
 const updateStore=async(req,res)=>{
   let Id=req.params.product_Id
   const updateStore=await Store.update(req.body,{where: {product_Id : Id}})
   res.status(200).send(updateStore)
   console.log(updateStore)
}

//delete One Roomtypes
const deleteStore=async(req,res)=>{
   let id=req.params.product_Id
  await Store.destroy({where: {product_Id: id}})
   res.status(200).send("Product is Deleted ")
   console.log("Product is Deleted " )
}

module.exports = {
   addStore,
   getAllStore,
   getOneStore,
   updateStore,
   deleteStore
}




























// const { express } = require('express');
// const db=require('../models');
// const { QueryTypes, Model } = require('sequelize');

// //create main Model
// const customers=db.customers


// //main work 

// // create Sponser 
// const addCustomer=async(req,res)=>{
//  let info={
//     title_id:req.body.title_id,
//     sponseredBy:req.body.sponseredBy,
//     Deal_Amt:req.body.Deal_Amt ,
//     percent:req.body.percent
//  }
//  const customers=await Sponser.create(info)
//  res.status(200).send(customers)
//  console.log(customers)
// }


// // Get All Sponser using sequelize Method "findAll"
// const getAllcustomers=async(req,res)=>{
//   let customers=await customers.findAll({})
//    res.status(200).send(customers)
//    console.log(customers);
//    }

// // // Getting details using query
// // const getdetails = async (req, res) => {
// //     try {
// //      let id=req.params.id
// //       const query = `SELECT p.title_id,p.title,r.rating, p.price ,s.sponseredBy
// //       from reviews r 
// //       join products p 
// //       on p.title_id=r.title_id
// //       left join sponsers s
// //       on s.title_id=r.title_id
// //       WHERE p.title_id = ${id}
// //       GROUP BY p.title_id`;
// //       console.log("Written query is =",query)
     
// //       const sponsers1 = await db.sequelize.query(query, {
// //         type: QueryTypes.SELECT
// //       });
// //        console.log("42 sponsers1",sponsers1)
// //       let response = {
// //         data: 'rawQuery',
// //         record: sponsers1,
// //       };
// //       res.status(200).send(response);
// //       console.log("45response",response)
// //     } catch (error) {
// //       console.error('Error retrieving products:', error);
// //       res.status(500).json({ error: 'Internal Server Error' });
// //     }
// //   };

// // // getting all sponsers by using query
// // const getSponsers = async (req, res) => {
// //   try {
// //     const query = `select * from sponsers`;
// //     console.log("Written query is =",query)
   
// //     const sponsers1 = await db.sequelize.query(query, {
// //       type: QueryTypes.SELECT
// //     });
    
// //     // let response = {
// //     //   data: 'rawQuery',
// //     //   record: sponsers1,
// //     // }; 
// //     res.status(200).send(sponsers1);
// //     console.log("45response",sponsers1)
// //   } catch (error) {
// //     console.error('Error retrieving products:', error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // };

// // const InsertSponsers = async (req, res) => {
// //   try {
// //     const query = `Insert INTO sponsers VALUES(12,409,"MRF",220,55,"2023-02-21","2023-07-12")`;
// //     console.log("Written query is =",query)
   
// //     const sponsers1 = await db.sequelize.query(query, {
// //       type: QueryTypes.INSERT
// //     });
    
// //     // let response = {
// //     //   data: 'rawQuery',
// //     //   record: sponsers1,
// //     // }; 
// //     res.status(200).send(sponsers1);
// //     console.log("45response",sponsers1)
// //   } catch (error) {
// //     console.error('Error retrieving products:', error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // };

// module.exports={
//     addCustomer,
//     getAllcustomers,
   
    
// }