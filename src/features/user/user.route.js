const userModel = require('./user.model')
const express = require('express')
const app = express.Router()

app.get("/", async (req, res) => {
    const user = await userModel.find({}).sort({ score: 'desc' })
    return res.status(200).send(user)
})

app.post("/", async (req, res) => {
    const { category, difficulty, name, score } = req.body
    console.log(req.body);
    if (!category || !difficulty || !name || !score) return res.status(403).send({ message: "Enter valid credential" })
    const user = await userModel({category, difficulty, name, score})
    user.save()
    return res.status(200).send(user)
})
module.exports = app