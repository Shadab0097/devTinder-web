import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const ConnectionProfileView = () => {
    const emailId = useSelector(store => store.connectionProfileView)
    const [view, setView] = useState()
    // console.log(getProfileEmailid)


    if (!emailId) return;
    const getConnectionProfile = async () => {
        // console.log(emailId)
        // if (emailId) return;

        try {
            const res = await axios.get(BASE_URL + "connection/view/profile", { params: { emailId }, withCredentials: true })

            setView(res.data)
        } catch (err) {
            console.log(err.message)
        }

    }


    useEffect(() => {
        getConnectionProfile()
    }, [emailId])

    if (!view) return

    const { _id, firstName, lastName, about, age, gender, photoUrl, skills } = view.data

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

                    {/* {showText[_id] ? <p>Accepted</p> : <div className=" flex mt-8 justify-center ">
                        <button className="btn btn-primary mx-2" onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
                        <button className="btn btn-secondary" onClick={() => reviewRequest("rejected", request._id)}>Reject</button>
                    </div>} */}
                </div>
            </div>
        </div>
    )
}

export default ConnectionProfileView