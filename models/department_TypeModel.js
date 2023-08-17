module.exports = (sequelize, DataTypes) => {
    const DepartmentTypeTable = sequelize.define("department_type", {
        dept_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        dept_type: {
            type: DataTypes.STRING
        },
        role_name: {
            type: DataTypes.STRING
        },
        role_id: {
            type: DataTypes.INTEGER
        }
    },
    { timestamps: false });

    return DepartmentTypeTable;
}
