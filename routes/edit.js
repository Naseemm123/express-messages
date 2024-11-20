const {Router} = require('express')
const {MessageModel} = require('../db')

const editRouter = Router()

editRouter.get('/:id', async (req, res) => {
    res.render('edit')
})

editRouter.post('/:id', async (req, res) => {
    const message = req.body.message
    await MessageModel.updateOne({_id: req.params.id}, { text: message })
    res.redirect('/')
})


module.exports = {editRouter}