const db = require('../models');
const { QueryTypes, Model } = require('sequelize');

const Event = db.events;

// Add Bookings
const addEvent = async (req, res) => {
   let info = {
      event_id: req.body.event_id,
      event_type: req.body.event_type,
      customer_name: req.body.customer_name,
      customer_phone: req.body.customer_phone,
      event_price: req.body.event_price,
      event_dt: req.body.event_dt,
      total_people: req.body.total_people
  };
  
const event = await Event.create(info)
   res.status(200).send(event)
   console.log(event)
}

//Get All Bookings
const getAllEvents=async(req,res)=>{
   let Allevent=await Event.findAll({})
  res.status(200).send(Allevent);
}

//Get One Bookings
const getOneEvent=async(req,res)=>{
   let Id=req.params.Event_Id
    let oneevent=await Event.findOne({where: {Event_Id: Id}})
    res.status(200).send(oneevent)
    console.log(oneevent)
 }

 const updateEvent=async(req,res)=>{
   let Id=req.params.Event_Id
   const updateevent=await Event.update(req.body,{where: {Event_Id : Id}})
   res.status(200).send(updateevent)
   console.log(updateevent)
}

const deleteEvent=async(req,res)=>{
   let id=req.params.Event_Id
  await Event.destroy({where: {Event_Id: id}})
   res.status(200).send()
   console.log("event is Deleted " )
}

module.exports = {
   addEvent,
   getAllEvents,
   getOneEvent,
   updateEvent,
   deleteEvent
}