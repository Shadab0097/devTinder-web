import { useDispatch, useSelector } from "react-redux"
import { BASE_URL } from "../utils/constant"
import { addRequest, removeRequest } from "../utils/requestsSlice"
import { useEffect, useRef, useState } from "react"
import axios from "axios"

const Requests = () => {
    const dispatch = useDispatch()
    const requests = useSelector(store => store.requests)
    const [notify, setNotify] = useState()
    const [showToast, setShowToast] = useState(false)
    const toastTimeoutRef = useRef(null)


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

    if (!requests) return

    // if (requests.length <= 0) return <h1 className="text-center my-10 text-3xl font-bold">No Requests Found</h1>

    return (


        <>
            <h1 className="text-center py-10 text-4xl">Connections Requests</h1>
            {requests.length <= 0 ? (
                <h1 className="text-center my-10 text-3xl font-bold">No Requests Found</h1>
            ) : (
                <div className="mb-28">

                    {requests.map((request) => {
                        const { _id, firstName, lastName, about, age, gender, photoUrl, skills } = request.fromUserId



                        return (

                            <div key={_id} className="flex items-center justify-center  p-4">
                                <div className="max-w-md w-full bg-base-300 rounded-xl shadow-lg overflow-hidden">
                                    <div className="p-8">
                                        <div className="flex items-center space-x-6">
                                            <div className="relative">
                                                <img
                                                    src={photoUrl}
                                                    alt="Profile"
                                                    className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-lg"

                                                />
                                                <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-400"></div>
                                            </div>
                                            <div className="flex-1">
                                                <h2 className="text-2xl font-bold text-white">{firstName + ' ' + lastName}</h2>
                                                {age && gender && <p className="text-gray-500 text-sm mt-1">{age + " " + gender} years old</p>}
                                            </div>
                                        </div>

                                        <div className="mt-6 space-y-4">
                                            <div className="flex items-center space-x-3 text-white">

                                                <span>{about}</span>
                                            </div>
                                            <div className="flex  items-center space-x-3 text-gray-600">

                                                <span className="text-white"><span className="font-bold"> Skills:</span> {skills.join(' ,')}</span>
                                            </div>
                                        </div>

                                        <div className=" flex mt-8 justify-center ">
                                            <button className="btn btn-primary mx-2" onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
                                            <button className="btn btn-secondary" onClick={() => reviewRequest("rejected", request._id)}>Reject</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            )}
            {showToast && <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    {notify === 'accepted' ? <span>Request Accepted Successfully</span> : <span>Request Rejected Successfully</span>}
                </div>
            </div>}



        </>
    )
}

export default Requests