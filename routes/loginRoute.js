//external imports
const express = require('express');

//internal imports
const { login, register } = require('../controllers/loginController');

const router = express.Router();

router.post('/', login);
router.post('/register', register);

module.exports = router;
