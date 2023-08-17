module.exports = (sequelize, DataTypes) => {
    const RoomTypesTable = sequelize.define("room_types", {
        room_type_id: {
            type: DataTypes.INTEGER
        },
        room_type: {
            type: DataTypes.STRING
        },
        room_no: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        room_price: {
            type: DataTypes.INTEGER
        }
    },
    { timestamps: false });

    return RoomTypesTable;
}
