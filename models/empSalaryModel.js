module.exports = (sequelize, DataTypes) => {
    const EmpSalaryTable = sequelize.define("emp_salaries", {
        emp_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        emp_name: {
            type: DataTypes.STRING
        },
        salary_amt: {
            type: DataTypes.INTEGER
        },
        leaves: {
            type: DataTypes.INTEGER
        },
        account_no: {
            type: DataTypes.INTEGER
        },
        ifsc_code: {
            type: DataTypes.STRING
        },
        pf_amt: {
            type: DataTypes.INTEGER
        },
        esi: {
            type: DataTypes.INTEGER
        }
    },
    { timestamps: false });

    return EmpSalaryTable;
}
