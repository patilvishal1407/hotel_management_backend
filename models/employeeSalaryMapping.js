// module.exports = (sequelize, DataTypes) => {
//     const EmployeeSalaryMapping = sequelize.define("employee_salary_mapping", {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         emp_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'employees',
//                 key: 'emp_id',
//             },
//         },
//         salary_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'emp_salaries',
//                 key: 'emp_id',
//             },
//         },
//     },
//     { timestamps: false });

//     // Define associations
//     EmployeeSalaryMapping.associate = (models) => {
//         EmployeeSalaryMapping.belongsTo(models.EmployeeTable, {
//             foreignKey: 'emp_id',
//             targetKey: 'emp_id',
//             onDelete: 'CASCADE',
//         });
//         EmployeeSalaryMapping.belongsTo(models.EmpSalaryTable, {
//             foreignKey: 'salary_id',
//             targetKey: 'emp_id',
//             onDelete: 'CASCADE',
//         });
//     };

//     return EmployeeSalaryMapping;
// }
