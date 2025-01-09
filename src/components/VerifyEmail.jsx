import React, { useEffect, useRef, useState } from 'react'
import { BASE_URL } from '../utils/constant';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const VerifyEmail = () => {

    const navigate = useNavigate()
    const { token } = useParams()
    const verifyTimer = useRef(null)
    //   const [error, setError] = useState()

    const verifyEmail = async () => {
        try {
            const response = await axios.get(BASE_URL + `/verify-email/${token}`, { withCredentials: true });
            // setMessage('Email verified successfully!');
            console.log(response)
            if (verifyTimer.current) {
                clearTimeout(verifyTimer.current)
            }

            verifyTimer.current = setTimeout(() => {
                navigate(BASE_URL + 'login')
            }, 3000)

        } catch (err) {

            // setMessage('Verification failed. Please try again.');

            // setError('')

            // setRedirecting(false)

            console.error(err);
        }
    };


    useEffect(() => {


        verifyEmail();

        return () => {
            // clearTimeout(toastTimerRef.current)
            clearTimeout(verifyTimer.current)

        }
    }, [token])
    return (
        <div>
            <p className='text-2xl items-center font-bold text-white cursor-pointer'>Email verified Succesfully, redirecting to login page.....</p>
        </div>
    )
}

export default VerifyEmail