module.exports = (sequelize, DataTypes) => {
    const EmployeeTable = sequelize.define("employees", {
        dept_id: {
            type: DataTypes.INTEGER
        },
        emp_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        emp_name: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        govt_id: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.STRING
        },
        dob: {
            type: DataTypes.DATEONLY
        },
        age: {
            type: DataTypes.INTEGER
        },
        role_id: {
            type: DataTypes.STRING
        },
        joining_dt: {
            type: DataTypes.DATEONLY
        },
        experiance: {
            type: DataTypes.STRING
        },
        qualification: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        picture: {
            type: DataTypes.STRING
        }
    },
    { timestamps: false });

    return EmployeeTable;
}
