const questionModel = require('./question.model')
const express = require('express')
const app = express.Router()



app.get('/', async (req, res) => {
  console.log(req.query);


  if (req.query.category && req.query.difficulty && req.query.amount) {
    let difficulty = req.query.difficulty
    let category = req.query.category
    let amount = Number(req.query.amount)
    const question = await questionModel.find({ difficulty, category }).limit(amount);
    console.log(question.length);
    return res.status(200).send(question)
  }



  else if (req.query.category && req.query.amount) {
    let category = req.query.category
    let amount = Number(req.query.amount)
    const question = await questionModel.find({ category }).limit(amount);
    console.log(question.length);
    return res.status(200).send(question)
  }



  else if (req.query.difficulty && req.query.amount) {
    let difficulty = req.query.difficulty
    let amount = Number(req.query.amount)
    const question = await questionModel.find({ difficulty }).limit(amount);
    console.log(question.length);
    return res.status(200).send(question)
  }

  


  else if (req.query.category && req.query.difficulty) {
    let difficulty = req.query.difficulty
    let category = req.query.category
    const question = await questionModel.find({ difficulty, category })
    console.log(question.length);
    return res.status(200).send(question)
  }
  else if (req.query.category) {
    let difficulty = req.query.difficulty
    let category = req.query.category
    const question = await questionModel.find({  category })
    console.log(question.length);
    return res.status(200).send(question)
  }
 


  else {
    const question = await questionModel.find({});
    return res.status(200).send(question)
  }
})




app.post('/', async (req, res) => {
  const { category, type, difficulty, question, correct_answer, incorrect_answers } = req.body

  if (!category || !type || !difficulty || !question || !correct_answer || !incorrect_answers) return res.status(403).send({ message: "Please Enter All Credential" })
  console.log(req.body);
  const questionCreated = await questionModel({ category, type, difficulty, question, correct_answer, incorrect_answers });
  questionCreated.save()

  return res.status(201).send({ questionCreated, message: "Added Successfully" });
})


module.exports = app