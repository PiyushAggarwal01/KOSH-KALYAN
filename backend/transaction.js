const express = require('express')
const Transaction = require('../models/Transaction')
const fetchUser = require('../middleware/fetchuser')

const router = express.Router()

// 🟢 Get all transactions
router.get('/', fetchUser, async (req, res) => {
    try {
      const transactions = await Transaction.find({ user: req.user.id })
  
      let totalBalance = 0
      let monthlyIncome = 0
      let monthlyExpenses = 0
  