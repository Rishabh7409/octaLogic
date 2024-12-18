const express = require("express");
const router = express.Router();
const { VehicleType, Vehicle, Booking } = require("../models");
const { Op } = require("sequelize");

// Get vehicle types
router.get("/vehicle-types", async (req, res) => {
    const { wheels } = req.query;
    try {
        console.log(wheels);
        const whereClause = wheels ? { wheels } : {};
        const types = await VehicleType.findAll({ where: whereClause });

        return res.json(types);
    } catch (error) {
        console.error("Error fetching vehicle types:", error);
        res.status(500).json({ message: "Error fetching vehicle types" });
    }
});

// Get vehicles by type
router.get("/vehicles", async (req, res) => {
    const { type_id } = req.query;
    const vehicles = await Vehicle.findAll({ where: { type_id } });
    res.json(vehicles);
}); 

router.get("/bookings", async (req, res) => {
    const bookings = await Booking.findAll({
        include: [
          {
            model: Vehicle,
            as: "Vehicle",
            include: [
              {
                model: VehicleType,
                as: "VehicleType", 
                attributes: ["id", "name"], 
              },
            ],
            attributes: ["id", "name", "type_id"], 
          },
        ],
        attributes: ["id", "vehicle_id","user_name","start_date","end_date", "createdAt"],
      });
    res.json(bookings);
}); 
// Submit booking
router.post("/book-vehicle", async (req, res) => {
    const { vehicleModel, firstName, lastName, dateRange } = req.body;
    let user_name = firstName + " " + lastName;
    let start_date = dateRange.startDate;
    let end_date = dateRange.endDate;
    // Check for overlapping bookings
    const existing = await Booking.findOne({
        where: {
            vehicle_id: vehicleModel,
            [Op.or]: [
                { start_date: { [Op.between]: [start_date, end_date] } },
                { end_date: { [Op.between]: [start_date, end_date] } },
            ],
        },
    });

    if (existing) {
        return res
            .status(400)
            .json({ message: "Vehicle already booked for these dates." });
    }

    const booking = await Booking.create({
        vehicle_id: vehicleModel,
        user_name,
        start_date,
        end_date,
    });
    res.json({ message: "Booking successful!", booking });
});

module.exports = router;
