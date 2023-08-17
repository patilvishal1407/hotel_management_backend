// const db = require('../models');
// const bcrypt = require('bcrypt');  
// const { QueryTypes, Model, Sequelize } = require('sequelize');

// const Employee = db.employees;
// const EmployeeSalary = db.emp_salary;
// const Emp_salary_mapping = db.emp_salary_mapping;

// // employees.hasMany(emp_salary_mapping, { foreignKey: 'emp_id' });
// // emp_salary.hasMany(emp_salary_mapping, { foreignKey: 'salary_id' }); 

// const addEmployeeMapping = async (req, res) => {
//     try {
//         const encryptedPassword = await bcrypt.hash(req.body.Password, 10);
//         let employeeData = {
//             dept_id: req.body.dept_id,
//             emp_name: req.body.emp_name,
//             phone: req.body.phone,
//             email: req.body.email,
//             password: encryptedPassword,
//             govt_id: req.body.govt_id,
//             gender: req.body.gender,
//             dob: req.body.dob,
//             age: req.body.age,
//             role_id: req.body.role_id,
//             joining_dt: req.body.joining_dt,
//             experiance: req.body.experiance,
//             qualification: req.body.qualification,
//             address: req.body.address,
//             picture: req.file.path
//         };

//         const employee = await Employee.create(employeeData);

//         let salaryDetails = {
//             emp_id: employee.emp_id 
//         };

//         const salaryDetailsData = {
//             emp_id: employee.emp_id, 
//             emp_name: req.body.emp_name,
//             salary_amt: req.body.salary_amt,
//             leaves: req.body.leaves,
//             account_no: req.body.account_no,
//             ifsc_code: req.body.ifsc_code,
//             pf_amt: req.body.pf_amt,
//             esi: req.body.esi
//         };

//         const employeeSalary = await EmployeeSalary.create(salaryDetailsData);

//         res.status(200).json({
//             employee: employee,
//             employeeSalary: employeeSalary
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// };

// module.exports = {
//     addEmployeeMapping
// };


const db = require('../models');
const bcrypt = require('bcrypt');

const Employee = db.employees;
const EmployeeSalary = db.emp_salary;
const Emp_salary_mapping = db.emp_salary_mapping;


const addEmployeeMapping = async (req, res) => {
    try {
        const encryptedPassword = await bcrypt.hash(req.body.Password, 10);
        
        const employeeData = {
            dept_id: req.body.dept_id,
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

        const employee = await Employee.create(employeeData);
        res.status(200).send(employeeData)
        console.log("employeeData :",employeeData)

        const salaryDetailsData = {
            emp_name: req.body.emp_name,
            salary_amt: req.body.salary_amt,
            leaves: req.body.leaves,
            account_no: req.body.account_no,
            ifsc_code: req.body.ifsc_code,
            pf_amt: req.body.pf_amt,
            esi: req.body.esi
        };

        const employeeSalary = await EmployeeSalary.create(salaryDetailsData);

        await Emp_salary_mapping.create({
            emp_id: employee.emp_id,
            salary_id: employeeSalary.emp_id
        });

        res.status(200).json({
            employee: employee,
            employeeSalary: employeeSalary
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    addEmployeeMapping
};
