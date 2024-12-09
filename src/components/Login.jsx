import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [emailId, setEmailId] = useState("rohit@2910.com")
    const [password, setPassword] = useState("Rohit@123")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:2000/login', { emailId, password }, { withCredentials: true })
            // console.log(response)
            dispatch(addUser(response.data))
            navigate('/')
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className="card bg-base-300 w-96 shadow-xl  m-auto my-2">
            <div className="card-body">
                <h2 className="card-title justify-center">login</h2>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input value={emailId} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setEmailId(e.target.value)} />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Password</span>
                    </div>
                    <input value={password} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <div className="card-actions justify-center my-2">
                    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}


export default Login