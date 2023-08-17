module.exports = (sequelize, DataTypes) => {
    const EventTable = sequelize.define("events", {
        event_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        event_type: {
            type: DataTypes.STRING
        },
        customer_name: {
            type: DataTypes.STRING
        },
        customer_phone: {
            type: DataTypes.STRING
        },
        event_price: {
            type: DataTypes.INTEGER
        },
        event_dt: {
            type: DataTypes.DATEONLY
        },
        total_people: {
            type: DataTypes.INTEGER
        }
    },
    { timestamps: false });

    return EventTable;
}
