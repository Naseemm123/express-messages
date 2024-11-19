const {Router} = require('express')
const {MessageModel} = require('../db')

const deleteRouter = Router()

deleteRouter.get('/:id', async (req, res) => {
    await MessageModel.deleteOne({_id: req.params.id})
    res.redirect('/')
})

module.exports = {deleteRouter}