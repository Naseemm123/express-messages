const { Router } = require('express')
const {MessageModel, getData} = require('../db')

const indexRouter = Router();

indexRouter.get('/', async function(req, res) {
  const data = await getData(MessageModel)
})

indexRouter.get('/message/:id', async function(req, res) {
  const messages = await MessageModel.find()
  const index = req.params.id
  const item = messages[index]
  res.render('message', {message: item})
})


module.exports = {indexRouter}