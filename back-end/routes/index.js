const express = require('express');
const router = express.Router();

const { signUpPost, logInPost, profile, logOut } = require('../controllers/auth')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/signup', signUpPost);
router.post('/login', logInPost)
router.get('/profile', profile)

module.exports = router;
