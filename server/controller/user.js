/* import { findOne, findOneAndDelete } from '../model/phone.js';
import { isPhoneNumberValid } from '../tools.js';
import { sendOtpViaFast2SMS } from '../service.js'; */


const PhoneSchema = require('../model/phone')
const { isPhoneNumberValid} = require('../tools')
const {sendOtpViaFast2SMS} = require('../service')
const CustomAPIError = require('../errors')

function generateRandom4DigitInteger() {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sendVerificationCode = async (req, res) => {

    const { phoneNumber } = req.body;

    if(!isPhoneNumberValid(phoneNumber)) {
        throw new CustomAPIError.BadRequestError("Number isn't valid")
    }

    const otp_code = generateRandom4DigitInteger();
    //sendOtpViaFast2SMS(phoneNumber, otp_code);
    await PhoneSchema.updateOne({ phone:phoneNumber }, { otp:otp_code }, { upsert: true });
    
    res.json({ message: 'OTP sent successfully!', otp_code });

}

const verifyCode = async (req, res) => {

    const { phoneNumber, otp } = req.body;
    console.log(phoneNumber, otp);

    const temp_details = await PhoneSchema.findOne({phone:phoneNumber});

    console.log(" this is temp"  , temp_details);
    if(otp != temp_details?.otp){
        // throw new CustomAPIError.BadRequestError("Invalid OTP")
        res.send("Invalid OTP")
    }

    if(temp_details) {
        await PhoneSchema.findOneAndDelete({phone:phoneNumber});
    }

    res.json({msg:"OTP verification successfyl"})
}
module.exports =  {
    sendVerificationCode,
    verifyCode
}