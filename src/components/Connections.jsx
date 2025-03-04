import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../utils/connectionSlice"
import { addView } from "../utils/connectionProfileViewSlice"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { FaComments, FaUserPlus } from "react-icons/fa"
import ShimmerUi from "./ShimmerUi"



const Connections = () => {
    const dispatch = useDispatch()
    const connections = useSelector(store => store.connections)
    console.log(connections)
    const loggedInUser = useSelector(store => store.user)
    // if (!loggedInUser) return null
    // console.log(loggedInUser.isPremium)

    const navigate = useNavigate()


    const getConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "user/connections", { withCredentials: true })
            console.log(res)

            dispatch(addConnections(res.data.data))
        } catch (err) {
            console.log(err.message)
        }

    }



    useEffect(() => {
        getConnections()
    }, [])



    if (!connections) return <ShimmerUi />

    if (connections.length === 0) return <h1 className="text-center my-10 text-3xl font-bold">No Connections</h1>

    const handleClick = (emailId) => {
        dispatch(addView(emailId))
        navigate('/connectionprofile')

    }


    return (



        <>
            <h1 className="text-center py-10 text-4xl">Connections</h1>

            <div className="mb-48">
                {connections.map((connections, index) => {
                    const { _id, firstName, lastName, about, age, gender, photoUrl, emailId, isPremium } = connections

                    return (


                        <div key={_id} className="container mx-auto px-4 py-8 relative ">
                            <div className="max-w-4xl mx-auto bg-base-300  backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl">
                                <div className="p-6 flex flex-col md:flex-row items-center gap-6">
                                    <div className="relative">
                                        <img
                                            src={photoUrl}
                                            alt={firstName}
                                            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
                                            onError={(e) => {
                                                e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e";
                                            }}
                                        />
                                    </div>

                                    <div className="flex-1 text-center md:text-left">
                                        <h2 className="text-2xl font-bold text-white mb-1">{firstName + ' ' + lastName}</h2>
                                        {age && gender && <p className="text-gray-300 mb-4">{gender[0].toUpperCase() + gender.slice(1)},{age} years old </p>
                                        }
                                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                            <button

                                                className='
                                                   
                                                     bg-indigo-600 hover:bg-indigo-700
                                                     px-6 py-2 rounded-full flex items-center gap-2 text-white font-semibold transition-all duration-300 transform hover:scale-105'
                                            >
                                                <FaUserPlus />
                                                Following
                                            </button>
                                            <button className="bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded-full flex items-center gap-2 text-white font-semibold transition-all duration-300 transform hover:scale-105" onClick={() => handleClick(emailId)}>
                                                <FaComments />
                                                View Profile
                                            </button>
                                            {loggedInUser.isPremium && <Link to={connections.isPremium ? "/chat/" + _id : "/connections"} > <button className="bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-full flex items-center gap-2 text-white font-semibold transition-all duration-300 transform hover:scale-105"  >
                                                <FaComments />
                                                {connections.isPremium ? "Message" : "Not a Premium"}
                                            </button> </Link>}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>


        </>
    )
}

export default Connections