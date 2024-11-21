const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignupOfGhoomakkads")
.then(() => {
    console.log("MongoDB connected");
})
.catch(() => {
    console.log("Failed to Connected")
})

const LogInSchema = new mongoose.Schema({
    
})