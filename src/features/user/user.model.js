const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    score: { type: Number, required: true },
    category: { type: String, required: true },
    difficulty: { type: String, required: true }

}, { versionKey: false, timestamps: true })

const userModel = mongoose.model("user", userSchema)

module.exports = userModel