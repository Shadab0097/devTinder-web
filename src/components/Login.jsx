import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../utils/constant"
import GetStarted from "./GetStarted"
import { FaCode, FaUsers, FaLaptopCode, FaEnvelope, FaLock } from "react-icons/fa";
import Spinner from "./Spinner"

const Login = () => {
    const [emailId, setEmailId] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [getOtp, setGetOtp] = useState(false)

    const [isloginForm, setIsLoginForm] = useState(true)
    const [error, setError] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isForgot, setIsForgot] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const toastTimerRef = useRef(null)
    const timer = useRef(null)

    const [otp, setOtp] = useState("")
    const [redirecting, setRedirecting] = useState(false)
    const [showOtpToast, setShowOtpToast] = useState(false)
    const [spinner, setSpinner] = useState(false)
    const [hideForgotPass, setHideForgotPass] = useState(false)
    const [otpSpinner, setOtpSpinner] = useState(false)





    const handleLogin = async () => {
        try {
            const response = await axios.post(BASE_URL + 'login', { emailId, password }, { withCredentials: true })
            // console.log(response)
            dispatch(addUser(response.data))
            navigate('/')
            setError('')

        } catch (err) {
            navigate('/login')
            setError(err?.response?.data)
            console.log(err)

        }
    }

    const handleSignUp = async () => {
        setSpinner(true)
        try {
            const response = await axios.post(BASE_URL + 'signup', { firstName, lastName, emailId, password }, { withCredentials: true })
            // console.log(response)
            // dispatch(addUser(response.data.data))
            // navigate('/profile')

            if (response.status === 200) {
                setRedirecting(true)
                setSpinner(false)
            }
            if (toastTimerRef.current) {
                clearInterval(toastTimerRef.current)
            }

            toastTimerRef.current = setTimeout(() => {
                setRedirecting(false)
                setIsLoginForm(true)
                // setHideForgotPass(true)
                setSpinner(false)

                toastTimerRef.current = null
            }, 3000)

            // alert('Registration successful! Please check your email to verify your account.');

            setError('')
            setRedirecting(true)
        } catch (err) {
            setSpinner(false)
            setError(err?.response?.data)
            console.log(err)

        }
    }

    const handleForgotPassword = async () => {
        setOtpSpinner(true)
        try {

            const res = await axios.post(BASE_URL + "profile/forgot/password", { emailId }, { withCredentials: true })
            if (res.status === 200) {
                setShowOtpToast(true)
                setOtpSpinner(false)

            }
            if (toastTimerRef.current) {
                clearInterval(toastTimerRef.current)
            }

            toastTimerRef.current = setTimeout(() => {

                setShowOtpToast(false)
                toastTimerRef.current = null
            }, 2000)

            setError('')

            setGetOtp(true)
            setHideForgotPass(true)

        } catch (err) {
            setError(err.response.data)
        }
    }

    const verifyOtp = async () => {
        setOtpSpinner(true)
        try {


            const res = await axios.post(BASE_URL + "profile/otp/verify", { emailId, otp, password }, { withCredentials: true })

            if (res.status === 200) {
                setError('')
                setIsForgot(false)
                setShowToast(true)
                setGetOtp(false)
                setHideForgotPass(false)
                setOtpSpinner(false)

            }
            if (toastTimerRef.current) {
                clearInterval(toastTimerRef.current)
            }

            toastTimerRef.current = setTimeout(() => {
                setShowToast(false)

                toastTimerRef.current = null
            }, 2000)

        } catch (err) {
            setError(err.response.data)
        }
    }

    const showForgotPassword = () => {
        setIsForgot(!isForgot)
        setError('')
    }

    if (timer.current) {
        clearInterval(timer.current)
    }

    timer.current = setTimeout(() => {
        setError('')
    }, 3000)


    useEffect(() => {


        // verifyEmail();

        return () => {
            clearTimeout(toastTimerRef.current)
            clearTimeout(timer.current)

            // clearTimeout(timer)

        }
    }, [])

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-base-50 to-base-100 flex items-center justify-center p-4 sm:mb-44 mb-40">
                <div className="max-w-6xl w-full bg-gradient-to-r from-cyan-100 to-slate-400 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-8">
                    {/* Left Section - Welcome Content */}
                    <div className="md:w-1/2 text-center">
                        <div className="flex justify-center space-x-6 mb-8">
                            <div className="animate-bounce-slow">
                                <FaCode className="text-6xl text-indigo-500" />
                            </div>
                            <div className="animate-bounce-slow delay-100">
                                <FaUsers className="text-6xl text-purple-500" />
                            </div>
                            <div className="animate-bounce-slow delay-200">
                                <FaLaptopCode className="text-6xl text-indigo-500" />
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Welcome to DevTinder!
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 mb-8">
                            Connect with like-minded developers and start building your network
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Swipe & Connect</h3>
                                <p className="text-gray-500">Find developers who share your interests and tech stack</p>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Collaborate</h3>
                                <p className="text-gray-500">Join forces on exciting projects and build something amazing</p>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Grow Together</h3>
                                <p className="text-gray-500">Learn, share knowledge, and level up your skills</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Auth Form */}

                    <div className="md:w-1/2 bg-gradient-to-br from-base-100 to-base-200 p-8 rounded-xl">
                        <div className="max-w-md mx-auto">
                            {isForgot ? <h2 className="text-3xl font-bold text-white mb-6 text-center">Forgot Password</h2> :
                                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-slate-400 mb-6 pb-2 text-center">
                                    {isloginForm ? 'Login' : 'Sign Up'}
                                </h2>}
                            <div className="space-y-6">


                                {!isloginForm &&
                                    <>
                                        <div className="relative">
                                            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                value={firstName}
                                                placeholder="First Name"
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-base-100"
                                                onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                        <div className="relative">
                                            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                                            <input
                                                type="text"
                                                value={lastName}
                                                placeholder="Last Name"
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-base-100"
                                                onChange={(e) => setLastName(e.target.value)} />

                                        </div>
                                    </>}

                                <div className="relative">
                                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="email"
                                        value={emailId}
                                        placeholder="Email address"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-base-100" onChange={(e) => setEmailId(e.target.value)}
                                    />
                                </div>


                                {!isForgot && <div className="relative">
                                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        value={password}
                                        placeholder="Password"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-base-100" onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>}
                                {getOtp &&
                                    <>
                                        <div className="relative">
                                            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                value={otp}
                                                placeholder="OTP"
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-base-100" onChange={(e) => setOtp(e.target.value)}
                                            />
                                        </div>
                                        <div className="relative">
                                            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                value={password}
                                                placeholder="Password"
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-base-100" onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </>
                                }
                                {otpSpinner ? <Spinner /> : <div>
                                    <p className="text-red-500">{error}</p>
                                    {isloginForm && <p className="text-blue-600 hover:underline font-semibold items-end mt-2 cursor-pointer" onClick={hideForgotPass ? handleForgotPassword : showForgotPassword}>
                                        {hideForgotPass ? 'resend OTP' : 'Forgot your password?'}
                                    </p>}
                                </div>}

                                {
                                    isForgot ?
                                        <button
                                            type="submit"
                                            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg text-lg transition-transform duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={getOtp ? verifyOtp : handleForgotPassword}
                                        >
                                            {getOtp ? 'Reset Password' : 'Get Otp'}
                                        </button> :

                                        spinner ? <Spinner /> : <button
                                            type="submit"
                                            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg text-lg transition-transform duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={isloginForm ? handleLogin : handleSignUp}
                                        >
                                            {isloginForm ? 'Login' : 'SignUp'}
                                        </button>

                                }

                                {!isForgot && <p className="text-center font-bold cursor-pointer" onClick={() => setIsLoginForm(!isloginForm)}>{isloginForm ? 'New User? Sign Up Here' : 'Existing User? LogIn Here'} </p>}
                            </div>



                        </div>
                    </div>

                </div>
            </div>
            {showToast && <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Password Changed Successfully</span>
                </div>
            </div>}

            {redirecting && <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Email verification code send Successfully</span>
                </div>
            </div>}
            {showOtpToast && <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Otp sent Successfully on Registerd Email</span>
                </div>
            </div>}

        </>

    )
}


export default Login
