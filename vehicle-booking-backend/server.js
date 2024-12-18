const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

app.use(bodyParser.json());
app.use("/api", bookingRoutes);

sequelize.sync().then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
