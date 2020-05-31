const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require('cors');



mongoose.connect('mongodb+srv://me:me@database-kldkd.mongodb.net/upec?retryWrites=true&w=majority', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors())
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

const lotteryRouter = require('./lottery.js')
app.use('/lottery', lotteryRouter)
