import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice"
import { useEffect } from "react"
import UserCard from "./UserCard"






const Feed = () => {
    const dispatch = useDispatch()
    const userFeed = useSelector(store => store.feed)

    const getFeed = async () => {
        try {
            const res = await axios.get(BASE_URL + "user/feed", { withCredentials: true })
            dispatch(addFeed(res.data))

        } catch (err) {

        }
    }



    useEffect(() => {
        getFeed()
    }, [])
    if (!userFeed) return

    if (userFeed.length <= 0) return <h1 className="font-bold text-center text-3xl mt-28">No New User found</h1>
    return userFeed && (
        <div className=" w-full mb-20 my-10  ">
            <UserCard user={userFeed[0]} />
        </div>
    )
}

export default Feed