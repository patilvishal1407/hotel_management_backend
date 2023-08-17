const db = require('../models');
const { QueryTypes, Model } = require('sequelize');

const FoodMenu= db.food_Menu;

// Add Bookings
const addFoodMenu = async (req, res) => {
   let info = {
      food_type_id: req.body.food_type_id,
      food_type_name: req.body.food_type_name,
      food_item_id: req.body.food_item_id,
      food_item_name: req.body.food_item_name,
      food_item_price: req.body.food_item_price,
      food_item_img: req.body.food_item_img
  };
  
const foodMenu = await FoodMenu.create(info)
   res.status(200).send(foodMenu)
   console.log(foodMenu)
}

//Get All Bookings
const getAllFoodMenu=async(req,res)=>{
   let allfoodMenu=await FoodMenu.findAll({})
  res.status(200).send(allfoodMenu);
}

//Get One Bookings
const getOneFoodMenu=async(req,res)=>{
   let Id=req.params.Food_Type_Id
    let onefoodMenu=await FoodMenu.findOne({where: {Food_Type_Id: Id}})
    res.status(200).send(onefoodMenu)
    console.log(onefoodMenu)
 }

 const updateFoodMenu=async(req,res)=>{
   let Id=req.params.Food_Type_Id
   const updatefoodMenu=await FoodMenu.update(req.body,{where: {Food_Type_Id : Id}})
   res.status(200).send(updatefoodMenu)
   console.log(updatefoodMenu)
}

const deleteFoodMenu=async(req,res)=>{
   let id=req.params.Food_Type_Id
  await FoodMenu.destroy({where: {Food_Type_Id: id}})
   res.status(200).send("foodMenu is Deleted ")
   console.log("foodMenu is Deleted " )
}

module.exports = {
   addFoodMenu,
   getAllFoodMenu,
   getOneFoodMenu,
   updateFoodMenu,
   deleteFoodMenu
}