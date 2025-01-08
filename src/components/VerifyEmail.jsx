import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const VerifyEmail = () => {
    const navigate = useNavigate()
    const { token } = useParams()
    const verifyEmail = async () => {
        try {
            const response = await axios.get(BASE_URL + `verify-email/${token}`, {}, { withCredentials: true });
            setMessage('Email verified successfully!');



        } catch (err) {
            setMessage('Verification failed. Please try again.');
            setTimeout(() => {
                navigate('/login')
            }, 3000)
            setError('')

            setRedirecting(false)

            console.error(err);
        }
    };
    useEffect(() => {


        verifyEmail();

        return () => {
            // clearTimeout(toastTimerRef.current)
            clearTimeout(timer)

        }
    }, [token])
    return (
        <div>
            <p className='text-2xl items-center font-bold text-white'>Email verified Succesfully, redirecting to login page.....</p>
        </div>
    )
}

export default VerifyEmail