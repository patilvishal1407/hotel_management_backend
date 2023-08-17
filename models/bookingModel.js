module.exports = (sequelize, DataTypes) => {
    const BookingTable = sequelize.define("booking", {
        booking_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            // defaultValue: 1000
        },
        customer_id: {
            type: DataTypes.INTEGER
        },
        no_of_people: {
            type: DataTypes.INTEGER
        },
        booking_date: {
            type: DataTypes.DATE
        },
        booking_time: {
            type: DataTypes.STRING
        },
        room_no: {
            type: DataTypes.INTEGER
        },
        room_type_id: {
            type: DataTypes.STRING
        },
        booking_amt: {
            type: DataTypes.INTEGER
        }
    },
    { timestamps: false });
    return BookingTable;
}
