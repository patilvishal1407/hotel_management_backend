const db = require('../models');
const { QueryTypes } = require('sequelize');
const bcrypt = require("bcrypt");

const Employee = db.employees;
const EmployeeSalary = db.emp_salary;

const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer');
// const empSalaryModel = require('../models/empSalaryModel');

// Add Bookings


const addEmployee = async (req, res) => {
   const encryptedPassword = await bcrypt.hash(req.body.Password, 10)

   let info = {
      dept_id: req.body.dept_id,
      emp_id: req.body.emp_id,
      emp_name: req.body.emp_name,
      phone: req.body.phone,
      email: req.body.email,
      password: encryptedPassword,
      govt_id: req.body.govt_id,
      gender: req.body.gender,
      dob: req.body.dob,
      age: req.body.age,
      role_id: req.body.role_id,
      joining_dt: req.body.joining_dt,
      experiance: req.body.experiance,
      qualification: req.body.qualification,
      address: req.body.address,
      picture: req.file.path
   };

   const departments = await Employee.create(info)
   res.status(200).send(departments)
   console.log(departments)
}

//Get All Bookings
const getAllEmployees = async (req, res) => {
   let allemployees = await Employee.findAll({})
   res.status(200).send(allemployees);
}

// //Get One Bookings
// const getOneEmployee = async (req, res) => {
//    let Id = req.params.emp_id
//    let oneemployees = await Employee.findOne({ where: { emp_id: Id } })
//    res.status(200).send(oneemployees)
//    console.log(oneemployees)
// }

// const updateEmployee = async (req, res) => {
//    let Id = req.params.Emp_Id
//    const updateemployee = await Employee.update(req.body, { where: { Emp_Id: Id } })
//    res.status(200).send(updateemployee)
//    console.log(updateemployee)
// }

// const deleteEmployee = async (req, res) => {
//    let id = req.params.Emp_Id
//    await Employee.destroy({ where: { Emp_Id: id } })
//    res.status(200).send("Employee is Deleted ")
//    console.log("Employee is Deleted ")
// }

// const EmployeeDashboard = async (req, res) => {
//    try {
//       const query = 'SELECT * FROM employees';
//       const employeesData = await Employee.sequelize.query(query, {
//          type: QueryTypes.SELECT,
//       });
//       const employees = employeesData.map(row => ({
//          Emp_Id: row.Emp_Id,
//          Emp_Name: row.Emp_Name,
//          Phone: row.Phone,
//          Email: row.Email,
//       }));
//       res.json(employees);
//    } catch (error) {
//       console.error('Error executing query:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//    }
// };

// const countOfEmployee = async (req, res) => {
//    try {
//       const query = 'SELECT COUNT(*) AS count FROM employees';
//       const employeesData = await Employee.sequelize.query(query, {
//          type: QueryTypes.SELECT,
//       });
//       const count = employeesData[0].count; // Extract the count from the result
//       res.status(200).json({ count });
//    } catch (error) {
//       console.error('Error executing query:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//    }
// };

// const validate = async (req, res) => {
//    const { Email, Password } = req.body;
//    try {
//       const user = await Employee.findOne({ where: { Email: req.body.Email } });
//       if (user) {
//          const passwordMatch = await bcrypt.compare(Password, user.Password);
//          if (passwordMatch) {
//             // Authentication successful
//             res.json({ success: true, message: 'Login successful', user });
//          } else {
//             res.status(401).json({ success: false, message: 'Invalid credentials' });
//          }
//       } else {
//          res.status(401).json({ success: false, message: 'Invalid credentials' });
//       }
//    } catch (error) {
//       console.error('Login error:', error);
//       res.status(500).json({ success: false, message: 'Internal server error' });
//    }
// };

// const ChangePassword = async (req, res) => {
//    try {
//       const { Email, currentPassword, newPassword } = req.body;
//       const user = await Employee.findOne({ where: { Email: Email } });

//       if (!user) {
//          return res.status(404).json({ success: false, message: 'User not found' });
//       }
//       const isPasswordCorrect = await bcrypt.compare(currentPassword, user.Password);

//       if (!isPasswordCorrect) {
//          return res.status(400).json({ success: false, message: 'Current password is incorrect' });
//       }
//       // Hash the new password
//       const hashedPassword = await bcrypt.hash(newPassword, 10);
//       user.Password = hashedPassword;
//       await user.save();
//       const isPasswordChanged = user.Password === hashedPassword;

//       res.json({ success: true, message: 'Password changed successfully', isPasswordChanged });
//    } catch (error) {
//       console.error('ChangePassword error:', error);
//       res.status(500).json({ success: false, message: error.message });
//    }
// };

// // const Signup = async (req, res) => {
// //    try {
// //       const { Emp_Name, Phone, DOB, Gender, Email, Password } = req.body;

// //       if (!req.file || !req.file.path) {
// //          throw new Error('Missing file or file path');
// //       }
// //       const user = await Employee.create({
// //          Emp_Name,
// //          Phone,
// //          DOB,
// //          Gender,
// //          Email,
// //          Password,
// //          Picture :req.file.path
// //       });

// //       res.json({ success: true, message: 'SignUp successful', user });
// //    } catch (error) {
// //       console.error('signUp error:', error);
// //       res.status(500).json({ success: false, message: error.message });
// //    }
// // };

// // const ChangePassword = async (req, res) => {
// //    try {
// //      const { Email, currentPassword, newPassword } = req.body;

// //      // Find the user in the database
// //      const user = await Employee.findOne({ where: { Email: Email } });

// //      if (!user) {
// //        return res.status(404).json({ success: false, message: 'User not found' });
// //      }

// //      // Check if the current password matches the one in the database
// //      if (user.Password !== currentPassword) {
// //        return res.status(400).json({ success: false, message: 'Current password is incorrect' });
// //      }
// //      // Update the user's password with the new password
// //      user.Password = newPassword;
// //      await user.save();

// //      // Check if the password was successfully changed
// //      const isPasswordChanged = user.Password === newPassword;

// //      res.json({ success: true, message: 'Password changed successfully', isPasswordChanged });
// //    } catch (error) {
// //      console.error('ChangePassword error:', error);
// //      res.status(500).json({ success: false, message: error.message });
// //    }
// //  };

// // const forgetPassword =async(req,res)=>{
// //       try {
// //         const { Email } = req.body;
// //         // Generate OTP using your preferred method (e.g., using Sequelize to fetch user data)
// //         const otp = await generateOTP(Email);
// //         // Send OTP via email, SMS, or any other method
// //         console.log(`OTP generated for ${Email}: ${otp}`);
// //         // Return success response
// //         res.status(200).json({ message: 'OTP generated successfully' });
// //       } catch (error) {
// //         // Handle error if OTP generation fails
// //         console.error(error);
// //         res.status(500).json({ error: 'Failed to generate OTP' });
// //       }
// //     };

// //     // Function to generate OTP for a given email
// // const generateOTP = async (Email) => {
// //    try {
// //      // Check if the user exists in the database
// //      const user = await Employee.findOne({ where: { Email } });
// //      if (!user) {
// //        throw new Error('User not found');
// //      }
// //      // Generate and save OTP for the user
// //      const otp = Math.floor(100000 + Math.random() * 900000);
// //      user.otp = otp;
// //      await user.save();
// //      return otp;
// //    } catch (error) {
// //      throw error;
// //    }
// //  };

// const forgetPassword = async (req, res) => {
//    try {
//       const { Email } = req.body;
//       const otp = await generateOTP(Email);
//       console.log(`OTP generated for ${Email}: ${otp}`);
//       res.status(200).json({ message: 'OTP generated successfully', otp: `${otp}` });
//    } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to generate OTP' });
//    }
// };

// //  // Function to generate OTP for a given email
// //  const generateOTP = async (Email) => {
// //    try {
// //      // Check if the user exists in the database
// //      const user = await Employee.findOne({ where: { Email } });
// //      if (!user) {
// //        throw new Error('User not found');
// //      }
// //      const otp = Math.floor(100000 + Math.random() * 900000);
// //      user.otp = otp;
// //      console.log("user.otp and otp: ",otp)
// //  await user.save();
// //      return otp;
// //    } catch (error) {
// //      throw error;
// //    }
// //  };


// //  const verifyOTP = async (req, res) => {
// //    try {
// //      const { Email, OTP, Newpassword } = req.body;
// //      console.log(`Values entered are: ${Email}, ${OTP}, ${Newpassword}`);

// //      // Check if the Email, OTP, and Newpassword are provided
// //      if (!Email || !OTP || !Newpassword) {
// //        throw new Error('Missing required fields');
// //      }
// //      const user = await Employee.findOne({ where: { Email } });

// //      if (!user) {
// //        throw new Error('User not found');
// //      }
// //      console.log("Entered OTP is:", OTP);
// //      console.log("User OTP is:", user.otp);

// //      if (OTP !== user.otp) {
// //       console.log("OTP is :",OTP)
// //        throw new Error('Invalid OTP');      
// //      }
// //      // Update the user's password and reset the OTP
// //      user.password = Newpassword;
// //      user.otp = null;
// //      await user.save();

// //      res.status(200).json({ message: 'Password changed successfully' });
// //    } catch (error) {
// //      console.error(error);
// //      res.status(500).json({ error: error.message });
// //    }
// //  };

// const generateOTP = async (Email) => {
//    try {
//       // Check if the user exists in the database
//       const user = await Employee.findOne({ where: { Email } });
//       if (!user) {
//          throw new Error('User not found');
//       }
//       const otp = Math.floor(100000 + Math.random() * 900000);
//       user.otp = otp;
//       await user.save();
//       return otp; // Return the OTP value
//    } catch (error) {
//       throw error;
//    }
// };

// const verifyOTP = async (req, res) => {
//    try {
//       const { Email, OTP, Newpassword } = req.body;
//       console.log(`Values entered are: ${Email}, ${OTP}, ${Newpassword}`);
//       if (!Email || !OTP || !Newpassword) {
//          throw new Error('Missing required fields');
//       }
//       const user = await Employee.findOne({ where: { Email } });
//       if (!user) {
//          throw new Error('User not found');
//       }
//       console.log("Entered OTP is:", OTP);
//       console.log("User OTP is:", user.get('otp'));

//       if (OTP !== user.get('otp') && user.get('otp') !== null) {
//          throw new Error('Invalid OTP');
//       }
//       user.password = Newpassword;
//       user.otp = null;
//       await user.save(); x
//       res.status(200).json({ message: 'Password changed successfully' });
//    } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: error.message });
//    }
// };

// // const verifyOTP = async (req, res) => {
// //    try {
// //      const { Email, OTP, Newpassword } = req.body;
// //      console.log(`values entered is :",${Email},${OTP},${Newpassword}`)
// //      const user = await Employee.findOne({ where: { Email } });

// //      if (!user) {
// //        throw new Error('User not found');
// //      }
// //      console.log("11 otp is :",OTP)
// //      if (OTP !== user.otp) {
// //       console.log("22user otp is :",user.otp)
// //        throw new Error('Invalid OTP');
// //      }
// //      user.password = Newpassword;
// //      user.otp = null;
// //      await user.save();
// //      res.status(200).json({ message: 'Password changed successfully' });
// //    } catch (error) {
// //      console.error(error);
// //      res.status(500).json({ error: 'Failed to change password' });
// //    }
// // }; 

// //Sending an Email using NodeMailer

// const generatePdfFromHtml = async (htmlContent, outputPath) => {
//    const browser = await puppeteer.launch({ headless: "new" });
//    const page = await browser.newPage();
//    await page.setContent(htmlContent);

//    // Generate the PDF with default options
//    await page.pdf({ path: outputPath });
//    await browser.close();
// };

// const sendMailWithPdf = async (req, res) => {
//    let transporter = await nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//          user: 'patilvishalvenkatrao@gmail.com',
//          pass: 'nnzqibskgwyweehp'
//       }
//    });
//    const { name, recipient, subject, message } = req.body;

//    const htmlContent = `
//      <html>
//      <head>
//      <title>Button Link</title>
//      <style>

//      body{
//       text-align:center;
//      },
//         .mybtn {
//            background-color: green;
//            text-align: center;
//            display: inline-block;
//            font-size: 20px;
//            cursor: pointer;
//            border:2px solid red;
//            color: blue;
//         }
//      </style>
//      </head>
//      <body>
//      <br></br>
//       <br></br>
//         <h1>Hello  ${name}</h1>
       
//         <h1>Welcome To Hotel 5*</h1>

//         <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger, higher-quality beds, a dresser, a refrigerator, and other kitchen facilities, upholstered chairs, a flat-screen television, and en-suite bathrooms. Small, lower-priced hotels may offer only the most basic guest services and facilities.</p>
    
//         <a href='https://www.tajhotels.com/'>
//         <button class="mybtn">
//          Click To see Website
//         </button>
//         </a>

//         <p>gymnasium, restaurants, day spa, and social function services. Hotel rooms are usually numbered (or named in some smaller hotels and B&Bs) to allow guests to identify their room. Some boutique, high-end hotels have custom decorated rooms. Some hotels offer meals as part of a room and board arrangement. In Japan, capsule hotels provide a tiny room suitable only for sleeping and shared bathroom facilities.</p>

//         <img src="https://tegrous.com/wp-content/uploads/2016/06/sap_business_one_hospitality_hotel_industry.jpg"></img>

//         <a href="https://www.youtube.com/watch?v=vf-kWqO11cA"> 
//     <br></br>
//         <button class="mybtn">
//         YouTube Link
//         </button>
//         </a>
//      </body>
//      </html>
//    `;

//    const SendMailTo = [recipient];
//    const results = [];

//    for (let i = 0; i < SendMailTo.length; i++) {
//       const recipient = SendMailTo[i];
//       const pdfOutputPath = `./output_${i}.pdf`;

//       await generatePdfFromHtml(htmlContent, pdfOutputPath);

//       try {
//          let info = await transporter.sendMail({
//             from: 'patilvishalvenkatrao@gmail.com',
//             to: recipient,
//             subject: subject,
//             text: message,
//             attachments: [
//                {
//                   filename: `output_${i}.pdf`,
//                   path: pdfOutputPath
//                }
//             ]
//          });
//          console.log(`Email sent to ${recipient}: ${info.messageId}`);
//          results.push(`Email sent to ${recipient}: ${info.messageId}`);
//       } catch (error) {
//          console.error(`Failed to send email to ${recipient}:`, error);
//          results.push(`Failed to send email to ${recipient}`);
//       }
//    }
//    res.send(results);
// };

// const Signup = async (req, res) => {
//    try {
//       const { Emp_Name, Phone, DOB, Gender, Email, Password } = req.body;

//       if (!req.file || !req.file.path) {
//          throw new Error('Missing file or file path');
//       }
//       const encryptedPassword = await bcrypt.hash(req.body.Password, 10)

//       const user = await Employee.create({
//          Emp_Name,
//          Phone,
//          DOB,
//          Gender,
//          Email,
//          Password: encryptedPassword,
//          Picture: req.file.path
//       });
//       res.json({ success: true, message: 'SignUp successful', user });
//    } catch (error) {
//       console.error('signUp error:', error);
//       res.status(500).json({ success: false, message: error.message });
//    }
// };

// employee_ salary mapping ----------

const getEmpSalaryDetails = async (req, res) =>{
   console.log("hello emp_sal")
   let empsalarydetail = await Employee.findAll({
      include:[{
         model: EmployeeSalary,
         as:'emp_map'
      }],
     // where:{emp_id:2}
   })    
   res.status(200).send(empsalarydetail);
   console.log("empsalarydetail :",empsalarydetail)
}

const addEmpSalary = async (req, res) => {
   try {
      const { emp_id, emp_name,salary_amt,age } = req.body; 

      const empdata = await Employee.create({
         emp_id:emp_id,
         emp_name:emp_name,
         age:age
      });

      const empId = empdata.emp_id    
      console.log("empID :",empId)

      const newSalary = await EmployeeSalary.create({
         emp_id:empId,
         emp_name:emp_name,
         salary_amt:salary_amt
      });

      res.status(201).send(newSalary);
      console.log("newemployeeDetails :",newSalary)

   } catch (error) {
      console.error("Error adding employee salary:", error);
      res.status(500).send("An error occurred while adding employee salary.");
   }
};

const updateEmpSalary = async (req, res) => {
   try {
      // const { emp_name, new_salary_amt } = req.body;
      const emp_id = req.params.emp_id;
      const updatedSalary = await EmployeeSalary.update(req.body,
         { where: { emp_id:emp_id } }
      );
      const update_employee_salary = await Employee.update(req.body, { where: { emp_id: emp_id } })

      res.status(200).send("Employee salary updated successfully."); 
      console.log("Updated employee salary:", updatedSalary,update_employee_salary);

   } catch (error) {
      console.error("Error updating employee salary:", error);
      res.status(500).send("An error occurred while updating employee salary.");
   }
};

const deleteEmployee = async (req, res) => {
   try {
      const emp_id = req.params.emp_id;

      // Delete employee salary record
      await EmployeeSalary.destroy({ where: { emp_id: emp_id } });

      // Delete employee information record
      await Employee.destroy({ where: { emp_id: emp_id } });

      res.status(200).send("Employee deleted successfully."); 
      console.log("Deleted employee with ID:", emp_id);

   } catch (error) {
      console.error("Error deleting employee:", error);
      res.status(500).send("An error occurred while deleting employee.");
   }
};

module.exports = {
   addEmployee,
   getAllEmployees,
   // getOneEmployee,
   // updateEmployee,
   // deleteEmployee,
   // validate,
   // Signup,
   // EmployeeDashboard,
   // ChangePassword,
   // countOfEmployee,
   // sendMailWithPdf,
   // forgetPassword,
   // verifyOTP,
   addEmpSalary,
   getEmpSalaryDetails,
   updateEmpSalary,
   deleteEmployee
}