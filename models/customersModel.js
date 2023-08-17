module.exports = (sequelize, DataTypes) => {
    const customersTable = sequelize.define("customers", {
        customer_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer_name: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.BIGINT
        },
        govt_id: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        room_no: {
            type: DataTypes.INTEGER
        },
        booking_id: {
            type: DataTypes.INTEGER
        },
        previous_customer: {
            type: DataTypes.BOOLEAN
        }
    },
    { timestamps: false });

    return customersTable;
}
