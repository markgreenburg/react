'use strict';
/**
 * Mongoose model for User
 */

/* Initialize DB and settings */
const config = require("./config");
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
    avatar: { type: String, required: true },
    created: { type: Date, required: true },
    lastUpdated: { type: Date, required: true }
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

const loginUser = (email, password, callback) => {
    mongoose.connect(config.mongoConfigs.db);
    // Find user in db with matching email
    User.findOne({email: email})
        .then((result) => {
            mongoose.disconnect();
            // Compare hashed passwords
            bcrypt.compare(password, result.password, (err, resolve) => {
                // Send back user data if passwords match else empty data object
                if (resolve === true) {
                    // To-Do: set auth in session
                    callback(result);
                } else {
                    callback({});
                }
            });
        })
        .catch((err) => {
            mongoose.disconnect();
            console.log(err);
            callback({});
        });
}

/* Create a new user in db (email as unique constraint) */
const createUser = (request, callback) => {
    let newUser = new User();
    newUser.fName = request.body.fName;
    newUser.lName = request.body.lName;
    newUser.email = request.body.email;
    newUser.avatar = request.body.avatar;
    newUser.created = new Date();
    newUser.lastUpdated = newUser.created;
    // Hash password input
    bcrypt.hash(request.body.password, 10, (err, hash) => {
        if (err) {
            console.log(err);
        }
        newUser.password = hash;
        mongoose.connect(config.mongoConfigs.db);
        // If hash succeeds, save new user to db
        newUser.save()
            .then((result) => {
                mongoose.disconnect();
                callback(result);
            })
            .catch((err) => {
                mongoose.disconnect();
                console.log(err);
                callback({});
            });
    });
};

module.exports = {
    User: User,
    getUser: getUser,
    loginUser: loginUser,
    createUser: createUser
};