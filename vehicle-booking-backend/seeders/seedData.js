const { sequelize, VehicleType, Vehicle } = require("../models");

const seedData = async () => {
  await sequelize.sync({ force: true }); // Reset tables

  const carTypes = await VehicleType.bulkCreate([
    { name: "Hatchback", wheels: 4 },
    { name: "Sedan", wheels: 4 },
    { name: "SUV", wheels: 4 },
  ]);

  const bikeTypes = await VehicleType.create({ name: "Cruiser", wheels: 2 });

  await Vehicle.bulkCreate([
    { name: "Toyota Yaris", type_id: carTypes[0].id },
    { name: "Honda City", type_id: carTypes[1].id },
    { name: "Ford Ecosport", type_id: carTypes[2].id },
    { name: "Harley Davidson", type_id: bikeTypes.id },
  ]);

  console.log("Database seeded!");
  process.exit();
};

seedData();
