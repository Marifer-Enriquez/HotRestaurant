var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Creating set of variables to hold the reservations and the waitlist

var tableArray = [
    {
    customerName: "Charlie",
    customerEmail: "charlie@example.com",
    customerID: "charlieExampleID",
    phoneNumber: "555-555-555",
    }
];

var waitingArray = [
    {
        customerName: "Marifer",
        customerEmail: "marifer@example.com",
        phoneNumber: "555-555-555",
        customerID: "mariferExampleID"
    }
];


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(tableArray);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitingArray);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});