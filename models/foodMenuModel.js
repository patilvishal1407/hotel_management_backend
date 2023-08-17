module.exports = (sequelize, DataTypes) => {
    const FoodMenuTable = sequelize.define("food_menus", {
        food_type_id: {
            type: DataTypes.INTEGER
        },
        food_type_name: {
            type: DataTypes.STRING
        },
        food_item_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        food_item_name: {
            type: DataTypes.STRING
        },
        food_item_price: {
            type: DataTypes.INTEGER
        },
        food_item_img: {
            type: DataTypes.STRING
        }
    },
    { timestamps: false });

    return FoodMenuTable;
}
