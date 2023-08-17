module.exports = (sequelize, DataTypes) => {
    const StoreTable = sequelize.define("store", {
        dept_id: {
            type: DataTypes.INTEGER
        },
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        product_name: {
            type: DataTypes.STRING
        },
        price_product: {
            type: DataTypes.STRING
        },
        no_quantity: {
            type: DataTypes.STRING
        },
        total_price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    { timestamps: false });

    return StoreTable;
}
