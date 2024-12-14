import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../utils/connectionSlice"

const Connections = () => {
    const dispatch = useDispatch()
    const connections = useSelector(store => store.connections)
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

    console.log(connections)

    if (!connections) return

    if (connections.length === 0) return <h1 className="text-center my-10 text-3xl font-bold">No Connections</h1>

    return (



        <>
            <h1 className="text-center py-10 text-4xl">Connections</h1>
            <div className="mb-28">
                {connections.map((connections) => {
                    const { firstName, lastName, about, age, gender, photoUrl } = connections

                    return (

                        <div className="  mx-auto my-5 sm:max-w-2xl ">
                            <div className="flex gap-3 bg-base-200 border border-gray-300 rounded-xl overflow-hidden  ">

                                <div className="relative w-32 h-32 flex-shrink-0">
                                    <img className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src={photoUrl} />
                                </div>

                                <div className="flex flex-col gap-2 py-2">

                                    <p className="text-xl font-bold">{firstName + ' ' + lastName}</p>

                                    {age && gender && <p className="text-gray-500">
                                        {age + ', ' + gender}
                                    </p>}

                                    <span className="flex items-center justify-start text-gray-500">
                                        <p>{about}</p>

                                    </span>

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