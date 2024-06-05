const express = require("express");
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require("./config/db");


dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.get("/", (req, res) => {
    res.status(200).json({
        message: "welcome to blood bank app",
    });
});
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require('./routes/analyticsRoutes.js'));
app.use("/api/v1/admin", require('./routes/adminRoutes.js'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Node server running at ${PORT}`.bgBlue.white);
});