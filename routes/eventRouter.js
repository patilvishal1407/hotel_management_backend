const eventController=require("../controllers/eventController.js");

const db=require('../models/index.js')
const router4 = require("express").Router();

// add Booking Details
router4.post("/addEvent", eventController.addEvent);

// Get All Booking Details
router4.get("/getAllEvents", eventController.getAllEvents);

// Get One Booking Details
router4.get("/:Event_Id", eventController.getOneEvent);

// update customers
router4.put("/updateOneEvent/:Event_Id", eventController.updateEvent);

// // delete customers
router4.delete("/deleteevent/:Event_Id", eventController.deleteEvent);

module.exports = router4;
