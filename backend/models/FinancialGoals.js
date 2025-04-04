const mongoose = require('mongoose')
const { Schema } = mongoose

const FinancialGoalSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: true
  },