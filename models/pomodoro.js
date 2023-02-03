const mongoose = require("mongoose");

const PomoSchema = new mongoose.Schema({
    title: String,
    description: {
        type: String, 
        required: false
    },
    date: Date
});

const model = mongoose.model("Pomodoro", PomoSchema);
module.exports = model;