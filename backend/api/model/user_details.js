const mongoose = require('mongoose');

const user_details = {
    email: String,
    password: String,
    _id: mongoose.Schema.Types.ObjectId
};

module.exports = mongoose.model("user_details", user_details);