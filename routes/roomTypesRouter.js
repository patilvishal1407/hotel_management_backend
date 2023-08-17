const roomTypesController=require("../controllers/roomTypesController.js");

const db=require('../models/index.js')
const router8 = require("express").Router();

router8.post("/addRoom", roomTypesController.addRoomtype);

router8.get("/getAllRoom", roomTypesController.getAllRoomtypes);

router8.get("/:Room_Type_Id", roomTypesController.getOneRoomtype);

router8.put("/updateoneRoom/:Room_Type_Id", roomTypesController.updateRoomtype);

router8.delete("/deleteRoom/:Room_Type_Id", roomTypesController.deleteRoomtype);

module.exports = router8;


