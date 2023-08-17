const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads');
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//   },
// });

// function checkFileType(file, cb) {
//   const filetypes = /jpeg|jpg|png/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);

//   if (extname && mimetype) {
//     return cb(null, true);
//   } else {
//     cb(new Error('Images only!'));
//   }
// }

// const upload = multer({
//   storage: storage,
//   fileFilter: checkFileType,
// });

var corsOptions = {
  origin: "http://localhost:8085",
};

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/Images', express.static('./Images'));
app.use("/uploads",express.static("./uploads"))

//routers
const router =require("./routes/employeeRouter.js");
app.use("/api/employees",router);

const router1 = require("./routes/department_TypeRouter.js");
app.use("/api/departments", router1);

const router2 = require("./routes/customersRouter.js");
app.use("/api/customers", router2);

const router3 = require("./routes/bookingRouter");
app.use("/api/booking", router3);

const router4 =require("./routes/eventRouter.js");
app.use("/api/events",router4);

const router5 =require("./routes/foodMenuRouter.js");
app.use("/api/foodMenu",router5);

const router6 =require("./routes/empSalaryRouter.js");
app.use("/api/employeeSalary",router6);

const router7 =require("./routes/foodOrderRouter.js");
app.use("/api/foodOrders",router7);

const router8 =require("./routes/roomTypesRouter.js");
app.use("/api/roomTypes",router8);

const router9 =require("./routes/storageRouter.js");
app.use("/api/store",router9);

//testing api
app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

// app.post=("/Signup",(req, res) => {
//   // const { Emp_Name, Phone, DOB, Gender, Email, Password } = req.body;
//   try {
//      const user =Employee.create(
//         {
//            Emp_Name: req.body.Emp_Name,
//            Phone: req.body.Phone,
//            DOB: req.body.DOB,
//            Gender: req.body.Gender,
//            Email: req.body.Email,
//            Password: req.body.Password,
//           //  Picture: req.file.path
          
//         }); res.json({ success: true, message: 'SignUp successful', user });
//   } catch (error) {
//      console.error('signUp error:', error);
//      res.status(500).json({ success: false, message: error });
//   }
// });

// router.post("/Signup", upload.single('Picture'), employeeController.Signup);




// app.get("/details",(req,res)=>{
//   let query =`select * from employees`
//   connection.query(query,(err,result)=>{
//       if(err){
//           res.json(err);
//       }else{
//           res.json(result);
//       }
//   })
// })

// app.post("/login", async (req, res) => {
//   //IF USER only enter email and password then user data or login activity should perform otherwise No user Found
//   if (req.body.password && req.body.email) {
//     const user = await Employee.findOne(req.body).select("Password");
//     if (user) {
//       res.send(user);
//     } else {
//       res.send({ Result: "No User Found" });
//     }
//   } else {
//     res.send({ Result: "No User Found" });
//   }
// });

// app.post("/validateCredentials", (req, res) => {
//   const { Email, Password } = req.body;

//   // Validate user inputs
//   if (!Email || !Password) {
//     res.status(400).json({ isLoggedIn: false, msg: "Please provide both email and password." });
//     return;
//   }

//   const query = `SELECT * FROM employees WHERE Email = ?`;
//   connection.query(query, [Email], (err, results) => {
//     if (err) {
//       console.log("Database Error:", err);
//       res.status(500).json({ isLoggedIn: false, msg: "An error occurred while processing your request." });
//       return;
//     }

//     if (results.length > 0) {
//       const storedPassword = results[0].Password;

//       // Compare the stored password with the provided password
//       if (Password === storedPassword) {
//         // Passwords match, successful login
//         res.json({ isLoggedIn: true, userData: results });
//       } else {
//         // Invalid password
//         res.json({ isLoggedIn: false, msg: "Invalid password" });
//       }
//     } else {
//       // User does not exist
//       res.json({ isLoggedIn: false, msg: "User does not exist" });
//     }
//   });
// });



// app.post('/validateCredentials' ,(req,res)=>{
//   console.log(req.body);
  
//   let query= `select * from employees where Email='${req.body.Email}'`;
  
//   connection.query(query,(err,results)=>{
  
//   if(results.length>0){
//   console.log(results);
  
//       if(req.body.Password == results[0].Password){
//          res.json({isLoggedIn: true,userData:results});
//       }else{
//       res.json({isLoggedIn: false, msg:"Invalid Password"})
//   }
//   }else{
//       res.json({isLoggedIn: false, msg:"User does not exist"})
//   }
//   })
//   }

// )





//  port



const PORT = process.env.PORT || 8085;

//server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});