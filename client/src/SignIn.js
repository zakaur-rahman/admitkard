import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SignIn.css'
import MuiPhone from './MuiPhone'
import { useState } from 'react'
import image from './AK_logo.png'
import axios from 'axios'

const SignIn = () => {
    const [muiPhone, setMuiPhone] = useState("+91")

    const navigate = useNavigate()

    function cleanMobileNumber(inputNumber) {
        const withoutCountryCode = inputNumber.replace(/^\+\d+\s*/, '');

        const cleanedNumber = withoutCountryCode.replace(/[ -]/g, '');

        return cleanedNumber;
    }

    const sendCode = async () => {

        const filteredNumber = cleanMobileNumber(muiPhone)
        console.log(filteredNumber);

        if (filteredNumber) {
            await axios.post(`http://localhost:5000/api/send-otp`, { phoneNumber: filteredNumber }).then((res) => {
                console.log(res)
                navigate('/otp', { state: { data: filteredNumber } })
            }).catch((error) => {
                console.log(error)
            })
        }
    }
    return (
        <div className='sign-in' >

            <img src={image} alt='imag' width={264} height={50} style={{ marginTop: '156px' }} />
            <div className="welcome">
                <h3 className="welcome-back">Welcome Back</h3>
                <p className="please-sign-in">Please sign in to your account</p>
            </div>

            <div className="contact">
                <MuiPhone className="div1" value={muiPhone} onChange={setMuiPhone} />
            </div>
            <div className="we-will-send-container">We will send you a one time SMS message.<br /> Charges may apply.
            </div>
            <div className='btn-div'>
                <button className='btn' onClick={sendCode}>Sign In with OTP</button>
            </div>
        </div>
    )
}

export default SignIn