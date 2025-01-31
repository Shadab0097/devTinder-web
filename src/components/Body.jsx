import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useEffect } from "react"


const Body = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loggedInUser = useSelector(store => store.user)

    const fetchUserData = async () => {
        if (loggedInUser) return
        try {
            const userData = await axios.get(BASE_URL + "profile/view", { withCredentials: true })

            dispatch(addUser(userData.data))

            if (loggedInUser) {

                navigate('/')
            }

        } catch (err) {
            if (err.status === 401) {
                navigate('/login')
            }
            console.error(err.message)
        }

    }

    useEffect(() => {
        fetchUserData()
    }, [])


    return (
        <div>

            <NavBar />

            <Outlet />
            <Footer />
        </div>
    )
}


export default Body