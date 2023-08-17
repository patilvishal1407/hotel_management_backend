const db = require('../models');
const { QueryTypes, Model } = require('sequelize');

const FoodOrder= db.food_orders;

// Add Bookings
const addFoodOrder = async (req, res) => {
   let info = {
      food_type_id: req.body.food_type_id,
      food_item_id: req.body.food_item_id,
      booking_id: req.body.booking_id,
      room_no: req.body.room_no,
      table_no: req.body.table_no,
      order_amt: req.body.order_amt
  };
  
const foodOrder = await FoodOrder.create(info)
   res.status(200).send(foodOrder)
   console.log(foodOrder)
}

//Get All Bookings
const getAllFoodOrder=async(req,res)=>{
   let allfoodOrder=await FoodOrder.findAll({})
  res.status(200).send(allfoodOrder);
}

//Get One Bookings
const getOneFoodOrder=async(req,res)=>{
   let Id=req.params.Food_Type_Id
    let onefoodOrder=await FoodOrder.findOne({where: {Food_Type_Id: Id}})
    res.status(200).send(onefoodOrder)
    console.log(onefoodOrder)
 }

 const updateFoodOrder=async(req,res)=>{
   let Id=req.params.Food_Type_Id
   const updatefoodOrder=await FoodOrder.update(req.body,{where: {Food_Type_Id : Id}})
   res.status(200).send(updatefoodOrder)
   console.log(updatefoodOrder)
}

const deleteFoodOrder=async(req,res)=>{
   let id=req.params.Food_Type_Id
  await FoodOrder.destroy({where: {Food_Type_Id: id}})
   res.status(200).send("foodOrder is Deleted ")
   console.log("foodOrder is Deleted " )
}

module.exports = {
   addFoodOrder,
   getAllFoodOrder,
   getOneFoodOrder,
   updateFoodOrder,
   deleteFoodOrder
}