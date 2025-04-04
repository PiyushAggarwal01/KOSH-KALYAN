const express = require('express')
const Transaction = require('../models/Transaction')
const fetchUser = require('../middleware/fetchuser')

const router = express.Router()

// 🟢 Get all transactions
