const { Router } = require('express')
const {MessageModel, getData} = require('../db')

const indexRouter = Router();

indexRouter.get('/', async function(req, res) {
  const data = await getData(MessageModel)
  res.render('index', {Messages: data})
})

indexRouter.get('/message/:id', async function(req, res) {
  const id = req.params.id
  const message = await MessageModel.findOne({_id: id})
  res.render('message', {message: message})
})


module.exports = {indexRouter}