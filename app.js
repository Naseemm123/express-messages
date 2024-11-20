const express = require('express')
const app = express()
const path = require('node:path')
const { indexRouter } = require('./routes/index')
const { newRouter } = require('./routes/new')
const { deleteRouter } = require('./routes/delete')
const { editRouter } = require('./routes/edit')

app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', indexRouter)
app.use('/new', newRouter)
app.use('/delete', deleteRouter)
app.use('/edit', editRouter)



app.listen(3000, () => console.log('running server in port 3000'))

