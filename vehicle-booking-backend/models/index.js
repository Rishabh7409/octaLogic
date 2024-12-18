const sequelize = require("../config/database");
const VehicleType = require("./VehicleType");
const Vehicle = require("./Vehicle");
const Booking = require("./Booking");

// Model associations
VehicleType.hasMany(Vehicle, { foreignKey: "type_id" });
Vehicle.belongsTo(VehicleType, { foreignKey: "type_id" });

Vehicle.hasMany(Booking, { foreignKey: "vehicle_id" });
Booking.belongsTo(Vehicle, { foreignKey: "vehicle_id" });

module.exports = { sequelize, VehicleType, Vehicle, Booking };
