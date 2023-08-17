const bookingController=require("../controllers/bookingController.js");

const db=require('../models/index.js')
const router3 = require("express").Router();

// add Booking Details
router3.post("/addBooking", bookingController.addBooking);

// Get All Booking Details
router3.get("/getAllBookings", bookingController.getAllBookings);

// Get One Booking Details
router3.get("/:Booking_Id", bookingController.getOneBooking);

// update customers
router3.put("/updateOneBooking/:Booking_Id", bookingController.updateBooking);

// // delete customers
router3.delete("/deletebooking/:Booking_Id", bookingController.deleteBooking);

module.exports = router3;
