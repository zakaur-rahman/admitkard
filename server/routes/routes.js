const express = require('express')
const router = express.Router()

const {sendVerificationCode, verifyCode} = require('../controller/user')

router.route("/send-otp").post(sendVerificationCode)
router.route('/verify-otp').post(verifyCode)

module.exports = router