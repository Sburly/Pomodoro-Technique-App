const mongoose = require("mongoose");

const PomoSchema = new mongoose.Schema({
    timer: Number,
    title: String,
    description: String,
    date: Date
});

const model = mongoose.model("Pomodoro", PomoSchema);
module.exports = model;