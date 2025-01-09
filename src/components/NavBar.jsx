import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../utils/constant"
import { removeUser } from "../utils/userSlice"

const NavBar = () => {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = async () => {
        try {
            await axios.post(BASE_URL + "logout", {}, { withCredentials: true })
            dispatch(removeUser())
            navigate('/login')
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
            <div className="navbar bg-base-300">
                <div className="flex-1">
                    <Link to={user && "/"} className="btn btn-ghost text-xl text-black bg-gradient-to-r from-cyan-100 to-slate-400 ">👨🏿‍💻DevTinder</Link>
                </div>
                {user && <div className="flex-none gap-2 ">
                    <div className="form-control flex flex-row items-center">
                        {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                        <p className="px-4">{user.firstName}</p>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user.photoUrl} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to="/profile" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to="/connections">Connections</Link></li>
                            <li><Link to="/requests">Requests</Link></li>

                            <li><a onClick={handleLogOut}>Logout</a></li>
                        </ul>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default NavBar