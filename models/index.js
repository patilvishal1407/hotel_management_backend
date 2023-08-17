const dbConfig = require('../config/dbconfig.js');
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

db.booking = require("./bookingModel.js")(sequelize, DataTypes)
db.customers = require('./customersModel.js')(sequelize, DataTypes)
db.department_type = require('./department_TypeModel.js')(sequelize, DataTypes)
db.employees = require('./employeeModel.js')(sequelize, DataTypes)
db.emp_salary = require('./empSalaryModel.js')(sequelize, DataTypes)
db.events = require('./eventModel.js')(sequelize, DataTypes)
db.food_menus = require('./foodMenuModel.js')(sequelize, DataTypes)
db.food_orders = require('./foodOrderModel.js')(sequelize, DataTypes)
db.room_types = require('./roomTypesModel.js')(sequelize, DataTypes)
db.store = require('./storageModel.js')(sequelize, DataTypes)

// db.emp_salary_mapping = require('./employeeSalaryMapping.js')(sequelize, DataTypes)

db.employees.hasMany(db.emp_salary, {
  foreignKey: 'emp_id',
  as: 'emp_map'
})

db.emp_salary.belongsTo(db.employees, {
  foreignKey: 'emp_id',
  as: 'sal_map;'
})

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

// Assuming associations should be set up here
// Employee.belongsToMany(EmployeeSalary, { through: Emp_salary_mapping, foreignKey: 'emp_id' });
// EmployeeSalary.belongsToMany(Employee, { through: Emp_salary_mapping, foreignKey: 'salary_id' });

module.exports = db;