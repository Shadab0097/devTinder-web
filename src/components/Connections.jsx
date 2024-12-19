import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../utils/connectionSlice"
import { addView } from "../utils/connectionProfileViewSlice"
import { Navigate, useNavigate } from "react-router-dom"

const Connections = () => {
    const dispatch = useDispatch()
    const connections = useSelector(store => store.connections)
    const navigate = useNavigate()
    const getConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "user/connections", { withCredentials: true })

            dispatch(addConnections(res.data.data))
        } catch (err) {

        }

    }

    useEffect(() => {
        getConnections()
    }, [])



    if (!connections) return

    if (connections.length === 0) return <h1 className="text-center my-10 text-3xl font-bold">No Connections</h1>

    const handleClick = (emailId) => {
        dispatch(addView(emailId))
        navigate('/connectionprofile')

    }

    return (



        <>
            <h1 className="text-center py-10 text-4xl">Connections</h1>
            <div className="mb-28">
                {connections.map((connections, index) => {
                    const { _id, firstName, lastName, about, age, gender, photoUrl, emailId } = connections

                    return (

                        <div key={_id} className="mx-auto my-5 sm:max-w-2xl ">
                            <div className="grid grid-cols-3 gap-3 bg-base-300 rounded--3xl rounded-r-3xl rounded-l-full overflow-hidden items-center ">

                                <div className=" col-span-1 relative w-32 h-32 flex-shrink-0">
                                    <img className="absolute left-0 top-0 w-full h-full rounded-full object-cover object-center transition duration-50" loading="lazy" src={photoUrl} />
                                </div>

                                <div className="col-span-1 gap-2 py-2 ">

                                    <p className="text-xl font-bold sm:ml-[-5rem]">{firstName + ' ' + lastName}</p>

                                    {age && gender && <p className="text-gray-500  sm:ml-[-5rem]">
                                        {age + ', ' + gender}
                                    </p>}

                                    <span className="flex items-center justify-start text-gray-500">
                                        {/* <p>{about}</p> */}

                                    </span>

                                </div>
                                <div className="col-span-1">

                                    <button className="btn btn-secondary sm:ml-14" onClick={() => handleClick(emailId)}>View Profile</button>
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