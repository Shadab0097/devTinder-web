import { useSelector } from "react-redux"

const NavBar = () => {
    const user = useSelector(store => store.user)

    return (
        <>
            <div className="navbar bg-base-200">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">👨🏿‍💻DevTinder</a>
                </div>
                {user && <div className="flex-none gap-2 ">
                    <div className="form-control flex flex-row items-center">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
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
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default NavBar