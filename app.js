// Requirements
if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const engine = require("ejs-locals");
const bodyParser = require('body-parser');
const mongoSanitize = require("express-mongo-sanitize");
const catchAsync = require("./utilities/catchAsync");

// Imports
const Pomodoro = require("./models/pomodoro");
const { validatePomodoro } = require("./middleware");
const ExpressError = require("./utilities/ExpressError");

// Express App Settings
const app = express();
let port = 5000;
app.set('view engine', 'ejs');
app.engine("ejs", engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDatabase Connection
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Database connected"));
app.use(mongoSanitize({ replaceWith: "_" }));

// Routes
app.get("/", catchAsync(async(req, res) => {
    const pomodoros = await Pomodoro.find({});
    res.render("home", { pomodoros });
}));

app.post("/", validatePomodoro, catchAsync(async(req, res) => {
    for (let i = 0; i < Number(req.body.num); i++) {
        let pomo = {
            title : req.body.title,
            description : req.body.description,
            date : new Date()
        };
        const pomodoro = new Pomodoro(pomo);
        await pomodoro.save();
    };
    res.redirect("/");
}));

app.patch("/:id", validatePomodoro, catchAsync(async(req, res) => {
    const pomo = await Pomodoro.findByIdAndUpdate(req.params.id, req.body);
    await pomo.save();
    res.redirect("/");
}));

app.delete("/:id", catchAsync(async(req, res) => {
    await Pomodoro.findByIdAndDelete(req.params.id);
    res.redirect("/");
}));

app.all("*", (req, res, next) => {
    const error = new ExpressError("Page Not Found", 404);
    next(error);
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Something went wrong";
    res.status(statusCode).render("error", { err });
});

// App Listening
app.listen(port, () => {
    console.log("http://localhost:" + port);
});