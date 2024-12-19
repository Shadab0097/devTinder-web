import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { removeFeed } from "../utils/feedSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useEffect, useRef, useState } from "react";

const UserCard = ({ user }) => {
    const [notify, setNotify] = useState()
    const [showToast, setShowToast] = useState(false)
    const toastTimeoutRef = useRef(null);

    const { _id, firstName, lastName, gender, age, about, skills, photoUrl } = user
    const dispatch = useDispatch()

    const handleRequest = async (status, userId) => {
        setNotify(status)
        setShowToast(true)
        try {
            await axios.post(BASE_URL + "request/send/" + status + "/" + userId, {}, { withCredentials: true })
            dispatch(removeFeed(_id))
            console.log('clicked')

            if (toastTimeoutRef.current) {
                clearTimeout(toastTimeoutRef.current);
            }

            toastTimeoutRef.current = setTimeout(() => {

                setShowToast(false)
                toastTimeoutRef.current = null;

            }, 2000)

        } catch (err) {
            console.log(err.message)
        }
    };

    const location = useLocation()
    useEffect(() => {


        return () => {
            if (toastTimeoutRef.current) {
                clearTimeout(toastTimeoutRef.current); // Clear timeout on component unmount
            }

        }
    }, [])

    return (
        <>

            <div className="card card-compact bg-base-300 w-96 shadow-xl m-auto">
                <figure className="px-10 pt-10">
                    <img
                        src={photoUrl}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{firstName + ' ' + lastName}</h2>
                    {age && gender && <p>{age + " " + gender}</p>}

                    <p className="break-words">{about}</p>
                    <p className="break-words">{skills}</p>

                    {location.pathname === "/" && <div className="card-actions my-3">
                        <button className="btn btn-primary" onClick={() => { handleRequest("ignored", _id) }}>ignore</button>
                        <button className="btn btn-secondary" onClick={() => { handleRequest("interested", _id) }}>interested</button>

                    </div>}
                </div>
            </div>


            {showToast && <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    {notify === 'interested' ? <span>Send Interested Successfully</span> : <span>Request Ignored Successfully</span>}
                </div>
            </div>}
        </>
    )
}

export default UserCard;
