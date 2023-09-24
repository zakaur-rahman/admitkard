import React from 'react'
import './success.css'
import image from './Artboard1.png'

const Success = () => {
    return (
        <div className='success'>
            <img src={image} alt='logo' />
            <div className='success-welcome'>Welcome to AdmitKard</div>
            <div className="label">
                <p className="in-order-to-provide">
                    <span className="text-wrapper">
                        In order to provide you with <br />a custom experience,
                        <br />
                    </span>
                    <span className="span">we need to ask you a few questions.</span>
                </p>
            </div>
            <div className='btn-sub'> 
                <button type='submit'>Get Started</button>
                <span>*This will only take 5 min.</span>
            </div>
        </div>
    )
}

export default Success