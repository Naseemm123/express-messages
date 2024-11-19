const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId


mongoose.connect('mongodb+srv://naseemmuhd123:nXlPEkQrK5zewKY7@cluster0.ukj9i.mongodb.net/users')
.then(() => console.log('database connection success'))


async function getData(model) {
    const data = await model.find()
    return data
}

const Message = new Schema({
    text: String,
    userId: ObjectId,
    author: String,
    added: Date
})

const MessageModel = mongoose.model('messages', Message)

module.exports = { MessageModel , getData}