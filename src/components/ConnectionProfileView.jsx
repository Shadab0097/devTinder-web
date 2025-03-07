import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { FaComments, FaEnvelope, FaUserPlus } from "react-icons/fa"

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

        <div className="container mx-auto px-4 py-16 relative ">
            <div className="max-w-4xl mx-auto bg-base-300   rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="relative">
                        <img
                            src={BASE_URL + "images/" + photoUrl}
                            alt={firstName}
                            className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e";
                            }}
                        />
                        {/* <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 px-4 py-1 rounded-full text-white text-sm">
                            Active Now
                        </div> */}
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white mb-2">{firstName + ' ' + lastName}</h2>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 mb-4">
                            <FaEnvelope className="text-indigo-400" />
                            <span>{emailId}</span>
                        </div>
                        <p className="text-gray-300 mb-6 line-clamp-3">{about}</p>
                        <p className="text-gray-300 mb-6 line-clamp-3">{skills.join(' ')}</p>


                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <button

                                className='
                    isFollowing
                  
            bg-indigo-600 hover:bg-indigo-700
                   px-6 py-3 rounded-full flex items-center gap-2 text-white font-semibold transition-all duration-300 transform hover:scale-105'
                            >
                                <FaUserPlus />
                                Following
                            </button>
                            <button className="bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-full flex items-center gap-2 text-white font-semibold transition-all duration-300 transform hover:scale-105">
                                <FaComments />
                                Message
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-8 text-center">
                            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-white">1.2K</div>
                                <div className="text-gray-400">Followers</div>
                            </div>
                            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-white">427</div>
                                <div className="text-gray-400">Following</div>
                            </div>
                            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-white">32</div>
                                <div className="text-gray-400">Projects</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectionProfileView