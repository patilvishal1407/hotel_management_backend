const db = require('../models');
const { QueryTypes, Model } = require('sequelize');

const Bookings = db.booking;

// Add Bookings
const addBooking = async (req, res) => {
   let info = {
      booking_id: req.body.booking_id,
      customer_id: req.body.customer_id,
      no_of_people: req.body.no_of_people,
      booking_date: req.body.booking_date,
      booking_time: req.body.booking_time,
      room_no: req.body.room_no,
      room_type_id: req.body.room_type_id,
      booking_amt: req.body.booking_amt,
   };
   const bookings = await Bookings.create(info)
   res.status(200).send(bookings)
   console.log(bookings)
}

//Get All Bookings
const getAllBookings = async (req, res) => {
   let AllBooking = await Bookings.findAll({})
   res.status(200).send(AllBooking);
}

//Get One Bookings
const getOneBooking = async (req, res) => {
   let Id = req.params.Booking_Id
   let oneBooking = await Bookings.findOne({ where: { Booking_Id: Id } })
   res.status(200).send(oneBooking)
   console.log(oneBooking)
}

const updateBooking = async (req, res) => {
   let Id = req.params.Booking_Id
   const updatedBooking = await Bookings.update(req.body, { where: { Booking_Id: Id } })
   res.status(200).send(updatedBooking)
   console.log(updatedBooking)
}

const deleteBooking = async (req, res) => {
   let id = req.params.Booking_Id
   await Bookings.destroy({ where: { Booking_Id: id } })
   res.status(200).send()
   console.log("product is Deleted ")
}

module.exports = {
   addBooking,
   getAllBookings,
   getOneBooking,
   updateBooking,
   deleteBooking
}