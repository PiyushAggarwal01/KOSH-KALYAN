const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWTSIGN

const fetchUser = (req, res, next) => {
  const token = req.header('auth-token')

  if (!token) {
    return res.status(401).json({ error: 'Please authenticate using a valid token' })
  }

  try {
    // Verify token using JWT_SECRET
    const data = jwt.verify(token, JWT_SECRET)

    // Support multiple token structures
    req.user = data.user || data
