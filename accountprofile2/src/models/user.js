'use strict';
/**
 * Mongoose model for User
 */

/* Initialize DB and settings */
const config = require("../config");
const bcrypt = require('bcrypt');
const bluebird = require('bluebird');
const mongoose = require('mongoose');
mongoose.promise = bluebird;

/* Create user schema */
const Schema = mongoose.Schema;

/* Define schema */
const userSchema = new Schema({
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: {type: String, required: true },
    avatar: { type: String, required: true }
});

/* User model */
const User = mongoose.model("User", userSchema);

/* Retrieve user from DB and hand result to a callback */
const getUser = (userId, callback) => {
    mongoose.connect(config.mongoConfigs.db);
    User.findOne({ _id: userId })
        .then((result) => {
            mongoose.disconnect();
            callback(result);
        })
        .catch((err) => {
            mongoose.disconnect();
            console.log(err);
            callback({});
        });
};

const loginUser = (req, res) => {
    mongoose.connect();
    // Find user in db with matching email
    User.findOne({email: req.body.email})
        .then((result) => {
            mongoose.disconnect();
            // Compare hashed passwords
            bcrypt.compare(req.body.password, result.password, (err, resolve) => {
                // Send back user data if passwords match else empty data object
                if (resolve === true) {
                    // To-Do: set auth in session
                    res.json({
                        "message": "User logged in successfully",
                        "data": result,
                        "success": true
                    });
                } else {
                    res.json({
                        "message": "Could not log in",
                        "data": {},
                        "success": false
                    });
                }
            })
        })
        .catch((err) => {
            mongoose.disconnect();
            console.log(err);
            res.json({
                "message": "Could not log in",
                "data": {},
                "success": false
            });
        });
}


