const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dns = require("dns");

require("dotenv").config();

// Use public DNS servers for MongoDB Atlas SRV lookup
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

app.use(cors());
app.use(express.json());


// ===============================
// MONGODB SCHEMA
// ===============================

const registrationSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: String,
    email: String,
    mobile: String,
    college: String,
    department: String,
    event: String,
    dob: String,
    gender: String,
    address: String
});

const Registration = mongoose.model("Registration", registrationSchema);


// ===============================
// HOME ROUTE
// ===============================

app.get("/", function (req, res) {
    res.send("TechNova REST API is running with MongoDB!");
});


// ===============================
// GET - ALL REGISTRATIONS
// ===============================

app.get("/api/registrations", async function (req, res) {

    try {

        const registrations = await Registration
            .find()
            .sort({ id: 1 });

        res.json(registrations);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching registrations",
            error: error.message
        });

    }

});


// ===============================
// GET - ONE REGISTRATION
// ===============================

app.get("/api/registrations/:id", async function (req, res) {

    try {

        const id = parseInt(req.params.id);

        if (isNaN(id)) {

            return res.status(400).json({
                message: "Invalid registration ID"
            });

        }

        const registration = await Registration.findOne({
            id: id
        });

        if (!registration) {

            return res.status(404).json({
                message: "Registration not found"
            });

        }

        res.json(registration);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching registration",
            error: error.message
        });

    }

});


// ===============================
// POST - ADD REGISTRATION
// ===============================

app.post("/api/registrations", async function (req, res) {

    try {

        // Find the highest valid numeric ID
        const lastRegistration = await Registration
            .findOne({
                id: {
                    $exists: true,
                    $type: "number"
                }
            })
            .sort({ id: -1 })
            .lean();

        let newId = 1;

        if (
            lastRegistration &&
            Number.isFinite(Number(lastRegistration.id))
        ) {

            newId = Number(lastRegistration.id) + 1;

        }

        const registration = new Registration({

            id: newId,

            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            college: req.body.college,
            department: req.body.department,
            event: req.body.event,
            dob: req.body.dob,
            gender: req.body.gender,
            address: req.body.address

        });

        await registration.save();

        res.status(201).json({

            message: "Registration created successfully",

            registration: registration

        });

    } catch (error) {

        console.log("Registration error:", error);

        res.status(500).json({

            message: "Error creating registration",

            error: error.message

        });

    }

});


// ===============================
// PUT - UPDATE REGISTRATION
// ===============================

app.put("/api/registrations/:id", async function (req, res) {

    try {

        const id = parseInt(req.params.id);

        if (isNaN(id)) {

            return res.status(400).json({
                message: "Invalid registration ID"
            });

        }

        const registration = await Registration.findOne({
            id: id
        });

        if (!registration) {

            return res.status(404).json({
                message: "Registration not found"
            });

        }

        registration.name =
            req.body.name || registration.name;

        registration.email =
            req.body.email || registration.email;

        registration.mobile =
            req.body.mobile || registration.mobile;

        registration.college =
            req.body.college || registration.college;

        registration.department =
            req.body.department || registration.department;

        registration.event =
            req.body.event || registration.event;

        registration.dob =
            req.body.dob || registration.dob;

        registration.gender =
            req.body.gender || registration.gender;

        registration.address =
            req.body.address || registration.address;

        await registration.save();

        res.json({

            message: "Registration updated successfully",

            registration: registration

        });

    } catch (error) {

        res.status(500).json({

            message: "Error updating registration",

            error: error.message

        });

    }

});


// ===============================
// DELETE - DELETE REGISTRATION
// ===============================

app.delete("/api/registrations/:id", async function (req, res) {

    try {

        const id = parseInt(req.params.id);

        if (isNaN(id)) {

            return res.status(400).json({
                message: "Invalid registration ID"
            });

        }

        const registration =
            await Registration.findOneAndDelete({
                id: id
            });

        if (!registration) {

            return res.status(404).json({
                message: "Registration not found"
            });

        }

        res.json({

            message: "Registration deleted successfully"

        });

    } catch (error) {

        res.status(500).json({

            message: "Error deleting registration",

            error: error.message

        });

    }

});


// ===============================
// CONNECT TO MONGODB ATLAS
// ===============================

mongoose.connect(process.env.MONGODB_URI)

    .then(function () {

        console.log("Connected to MongoDB Atlas");

        app.listen(
            process.env.PORT || 3000,
            "0.0.0.0",
            function () {

                console.log(
                    "TechNova REST API running on http://localhost:" +
                    (process.env.PORT || 3000)
                );

            }
        );

    })

    .catch(function (error) {

        console.log(
            "MongoDB connection failed:",
            error.message
        );

    });