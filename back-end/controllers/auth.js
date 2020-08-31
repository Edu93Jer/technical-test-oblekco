const User = require('../models/User');
const passport = require('../config/passport');

exports.signUpPost = (req, res) => {
 res.json('hola')
}

exports.logInPost = (req, res) => {
 res.json('hola2')
}

exports.logOut = (req, res) => {
 res.json('hola3')
}