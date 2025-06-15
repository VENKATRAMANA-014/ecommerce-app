const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET)

exports.register = async (req, res) => {
  const { name, email, password } = req.body
  const exists = await User.findOne({ email })
  if (exists) return res.status(400).json("User exists")
  const hashed = await bcrypt.hash(password, 10)
  const user = await User.create({ name, email, password: hashed })
  const token = generateToken(user._id)
  res.json({ token, user: { name, email, isAdmin: user.isAdmin } })
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) return res.status(400).json("Invalid")
  const match = await bcrypt.compare(password, user.password)
  if (!match) return res.status(400).json("Invalid")
  const token = generateToken(user._id)
  res.json({ token, user: { name: user.name, email, isAdmin: user.isAdmin } })
}
