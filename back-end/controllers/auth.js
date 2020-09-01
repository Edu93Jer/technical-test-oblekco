const User = require('../models/User');
const passport = require('../config/passport');
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.signUpPost = async (req, res) => {
 const { name, email, password, birthday, phone } = req.body
 const user = await User.register({ name, email, phone, birthday }, password)
 res.status(201).json({ message: "User created" })
}

exports.logInPost = (req, res, next) => {
 passport.authenticate('local', (err, user, info) => {
  if (err) return res.status(500).json({ err, info })
  if (!user) return res.status(401).json({ err: { ...info } })
  req.login(user, error => {
   if (error) return res.status(401).json({ error })
   const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: 60 * 60 * 2 })
   return res.status(200).json({ token })
  })
 })(req, res, next)
}

exports.profile = async (req, res) => {
 const token = req.headers['x-access-token']
 if (!token) {
  return res.status(401).json({
   message: 'No token provided'
  })
 }

 const decoded = jwt.verify(token, process.env.SECRET);
 const user = await User.findById(decoded.id)
 if (!user) return res.status(401).json({ message: 'No User found' })

 res.status(200).json({ user })
}

