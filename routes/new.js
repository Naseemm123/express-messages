const {Router} = require('express')
const {messages} = require('./index')
const { MessageModel } = require('../db')

const newRouter = Router()

newRouter.get('/', (req, res) => res.render('form'))

newRouter.post('/', async function(req, res) {
    const author = req.body.author
    const message = req.body.message
    await MessageModel.create({
        text: message,
        author: author,
        added: new Date()
    })


    res.redirect('/')
})

module.exports = { newRouter }