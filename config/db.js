const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`connected To MongoDB database ${mongoose.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Mongodb Database Error ${error}`.bgRed.whitenpm );
    }
};

module.exports = connectDB;