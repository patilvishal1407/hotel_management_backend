const db = require('../models');
const { QueryTypes, Model } = require('sequelize');

const Roomtypes = db.room_types;

// Add Roomtypes
const addRoomtype = async (req, res) => {
   let info = {
      room_type_id: req.body.room_type_id,
      room_type: req.body.room_type,
      room_no: req.body.room_no,
      room_price: req.body.room_price
  };
  
const roomtype = await Roomtypes.create(info)
   res.status(200).send(roomtype)
   console.log(roomtype)
}

//Get All Roomtypes
const getAllRoomtypes=async(req,res)=>{
   let allroomtypes=await Roomtypes.findAll({})
  res.status(200).send(allroomtypes);
}

//Get One Roomtypes
const getOneRoomtype=async(req,res)=>{
   let Id=req.params.Room_Type_Id
    let oneroomtype=await Roomtypes.findOne({where: {Room_Type_Id: Id}})
    res.status(200).send(oneroomtype)
    console.log(oneroomtype)
 }

//Update One Roomtypes
 const updateRoomtype=async(req,res)=>{
   let Id=req.params.Room_Type_Id
   const updateroomtype=await Roomtypes.update(req.body,{where: {Room_Type_Id : Id}})
   res.status(200).send(updateroomtype)
   console.log(updateroomtype)
}

//delete One Roomtypes
const deleteRoomtype=async(req,res)=>{
   let id=req.params.Room_Type_Id
  await Roomtypes.destroy({where: {Room_Type_Id: id}})
   res.status(200).send("Roomtype is Deleted ")
   console.log("Roomtype is Deleted " )
}

module.exports = {
   addRoomtype,
   getAllRoomtypes,
   getOneRoomtype,
   updateRoomtype,
   deleteRoomtype
}