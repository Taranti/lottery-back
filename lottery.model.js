const mongoose = require('mongoose')
const Infos = require('./infos.model')

const lotterySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  empty: {
    type: Boolean,
    required: true
  },
  infos: {
    type: Infos,
    required: false,
    select:false
  }
},{collection:'lottery'})

module.exports = mongoose.model('Lottery', lotterySchema)