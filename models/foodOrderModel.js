module.exports = (sequelize, DataTypes) => {
    const FoodOrderTable = sequelize.define("food_orders", {
        food_type_id: {
            type: DataTypes.INTEGER
        },
        food_item_id: {
            type: DataTypes.INTEGER
        },
        booking_id: {
            type: DataTypes.INTEGER
        },
        room_no: {
            type: DataTypes.INTEGER
        },
        table_no: {
            type: DataTypes.INTEGER
        },
        order_amt: {
            type: DataTypes.INTEGER
        }
    },
    { timestamps: false });

    return FoodOrderTable;
}
