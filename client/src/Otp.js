import React, { useEffect, useState } from 'react';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import './otp.css'
import image from './undraw_confirmed_81ex.png'



export const Otp = () => {
    const [otp, setOtp] = useState('')

    const location = useLocation();
    const [phoneNumber, setPhoneNumber] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
        setPhoneNumber(location.state?.data);
    }, [location.state?.data]);



    const resendOtp = async () => {
        if (phoneNumber) {

            await axios.post(`http://localhost:5000/api/send-otp`, { phoneNumber }).then((res) => {
                console.log(res)
                alert(res.data.message)
            }).catch((error) => {
                console.log(error)
            })
        }
    }
    /* const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return hours + ':' + minutes;
    }

    const [time, setTime] = useState(getCurrentTime()) */

    const verifyCode = async () => {
        await axios.post(`http://localhost:5000/api/verify-otp`, { phoneNumber, otp }).then((res) => {

            if (res.data == "Invalid OTP") {
                alert(res.data)
                return;
            }

            navigate('/success')

        }).catch((error) => {
            console.log(error);
        })
    }
    const handleChange = (newValue) => {
        setOtp(newValue)
    }
    return (
        <div className='otp' >
            <img src={image} alt='imag' width={131.5} height={138} style={{ marginTop: '100px' }} />
            <div className="text-wrapper">Please verify Mobile number</div>
            <div className="text-wrapper">
                <div className="number-wrapper">An OTP is sent to {phoneNumber}</div>
                <Link
                    className='change-phone'
                    to={"/"}
                >
                    Change Phone Number
                </Link>
            </div>

            <MuiOtpInput className='otp-data' value={otp} onChange={handleChange} />

            <div className='resend-code'>
                <p>Didn’t receive the code?</p>
                <button type="submit" onClick={resendOtp}>Resend Code</button>
            </div>
            <div style={{ paddingTop: 28 }}>
                <button className='verify-btn' type="submit" onClick={() => { verifyCode() }}> Verify </button>
            </div>
        </div>
    )
}

export default Otp