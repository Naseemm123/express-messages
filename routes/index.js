const { Router } = require('express')
const MessageModel = require('../db')

const indexRouter = Router();


indexRouter.get('/', async function(req, res) {
  console.log(MessageModel)
  const messages = await MessageModel.find()
  console.log('messages', messages)
  res.render('index', {messages: messages})
})

indexRouter.get('/message/:id', async function(req, res) {
  const messages = await MessageModel.find()
  const index = req.params.id
  const item = messages[index]
  res.render('message', {message: item})
})


module.exports = {indexRouter}