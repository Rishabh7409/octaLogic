const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const VehicleType = sequelize.define("VehicleType", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  wheels: { type: DataTypes.INTEGER, allowNull: false }, // Add wheels column
});

module.exports = VehicleType;
