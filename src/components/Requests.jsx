import { useDispatch, useSelector } from "react-redux"
import { BASE_URL } from "../utils/constant"
import { addRequest, removeRequest } from "../utils/requestsSlice"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { FaHeart, FaTimes } from "react-icons/fa"
import ShimmerUi from "./ShimmerUi"

const Requests = () => {
    const dispatch = useDispatch()
    const requests = useSelector(store => store.requests)
    const [notify, setNotify] = useState()
    const [showToast, setShowToast] = useState(false)
    const toastTimeoutRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false);



    const reviewRequest = async (status, _id) => {
        setNotify(status)
        try {
            await axios.post(BASE_URL + "request/review/" + status + "/" + _id, {}, {
                withCredentials: true
            })


            setShowToast(true)

            dispatch(removeRequest(_id))

            if (toastTimeoutRef.current) {
                clearInterval(toastTimeoutRef.current)
            }

            toastTimeoutRef.current = setTimeout(() => {

                setShowToast(false)
                toastTimeoutRef.current = null;

            }, 3000)


        } catch (err) {
            console.log(err.message)
        }

    }

    const getRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "user/request/recieved", { withCredentials: true })

            dispatch(addRequest(res.data.data))


        } catch (err) {

        }
    }

    useEffect(() => {
        getRequests()
        return () => {
            if (toastTimeoutRef.current) {
                clearTimeout(toastTimeoutRef.current); // Clear timeout on component unmount
            }
        };
    }, [])

    if (!requests) return <ShimmerUi />

    // if (requests.length <= 0) return <h1 className="text-center my-10 text-3xl font-bold">No Requests Found</h1>

    return (


        <>
            <h1 className="text-center py-10 text-4xl">Connections Requests</h1>
            {requests.length <= 0 ? (
                <h1 className="text-center my-10 text-3xl font-bold">No Requests Found</h1>
            ) : (
                <div className="mb-48">

                    {requests.map((request) => {
                        const { _id, firstName, lastName, about, age, gender, photoUrl, skills } = request.fromUserId



                        return (
                            <div
                                className="max-w-sm mx-auto bg-base-300 rounded-xl shadow-md overflow-hidden my-4 transition-all duration-300 hover:shadow-xl"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <div className="relative">
                                    <img
                                        src={photoUrl}
                                        alt={firstName}
                                        className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                                        <h2 className="text-2xl font-bold text-white mb-1">
                                            {firstName + ' ' + lastName}
                                        </h2>
                                        {age && gender && <span className="text-xs text-white font-medium">
                                            {/* {requestData.location} • {requestData.distance} */}
                                            {age + ' ' + gender}
                                        </span>}
                                    </div>
                                </div>

                                <div className="p-4">
                                    <p className="text-white text-sm mb-3">
                                        {about}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {skills.map((interest, index) => (
                                            <span
                                                key={index}
                                                className="px-2.5 py-0.5 bg-pink-50 text-pink-700 rounded-full text-xs font-medium hover:bg-pink-100 transition-colors duration-200"
                                            >
                                                {interest}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex justify-center space-x-3">
                                        <button
                                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                                            onClick={() => reviewRequest("rejected", request._id)}
                                        >
                                            <FaTimes className="w-6 h-6" />
                                        </button>
                                        <button
                                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                                            onClick={() => reviewRequest("accepted", request._id)}
                                        >
                                            <FaHeart className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            )}
            {showToast && <div className="toast toast-top toast-center">
                <div className={notify === 'accepted' ? "alert alert-success" : "alert alert-error"}>
                    {notify === 'accepted' ? <span>Request Accepted Successfully</span> : <span c>Request Rejected Successfully</span>}
                </div>
            </div>}



        </>
    )
}

export default Requests