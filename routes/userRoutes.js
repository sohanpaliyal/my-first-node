const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')

router.route('/login').post(loginUser)


module.exports = route;