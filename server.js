const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let registrations = [];
let nextId = 1;


// HOME ROUTE
app.get("/", function (req, res) {
    res.send("TechNova REST API is running!");
});


// GET - Get all registrations
app.get("/api/registrations", function (req, res) {
    res.json(registrations);
});


// GET - Get one registration
app.get("/api/registrations/:id", function (req, res) {
    const id = parseInt(req.params.id);

    const registration = registrations.find(function (item) {
        return item.id === id;
    });

    if (!registration) {
        return res.status(404).json({
            message: "Registration not found"
        });
    }

    res.json(registration);
});


// POST - Add a new registration
app.post("/api/registrations", function (req, res) {

    const registration = {
        id: nextId++,
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        college: req.body.college,
        department: req.body.department,
        event: req.body.event,
        dob: req.body.dob,
        gender: req.body.gender,
        address: req.body.address
    };

    registrations.push(registration);

    res.status(201).json({
        message: "Registration created successfully",
        registration: registration
    });
});


// PUT - Update a registration
app.put("/api/registrations/:id", function (req, res) {

    const id = parseInt(req.params.id);

    const registration = registrations.find(function (item) {
        return item.id === id;
    });

    if (!registration) {
        return res.status(404).json({
            message: "Registration not found"
        });
    }

    registration.name = req.body.name || registration.name;
    registration.email = req.body.email || registration.email;
    registration.mobile = req.body.mobile || registration.mobile;
    registration.college = req.body.college || registration.college;
    registration.department = req.body.department || registration.department;
    registration.event = req.body.event || registration.event;
    registration.dob = req.body.dob || registration.dob;
    registration.gender = req.body.gender || registration.gender;
    registration.address = req.body.address || registration.address;

    res.json({
        message: "Registration updated successfully",
        registration: registration
    });
});


// DELETE - Delete a registration
app.delete("/api/registrations/:id", function (req, res) {

    const id = parseInt(req.params.id);

    const index = registrations.findIndex(function (item) {
        return item.id === id;
    });

    if (index === -1) {
        return res.status(404).json({
            message: "Registration not found"
        });
    }

    registrations.splice(index, 1);

    res.json({
        message: "Registration deleted successfully"
    });
});


// START SERVER
app.listen(3000, function () {
    console.log("TechNova REST API running on http://localhost:3000");
});