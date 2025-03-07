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
    // console.log(photoUrl)
    //  const blobPhotoUrl = URL.createObjectURL(photoUrl)

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

            }, 3000)

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

            <div className="card card-compact bg-base-300 w-96 shadow-xl m-auto ">
                <figure className="">
                    <img
                        src={BASE_URL + "images/" + photoUrl}
                        alt="photo"
                        className="rounded-xl border-b-4 border-cyan-100 w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">{firstName[0].toUpperCase() + firstName.slice(1) + ' ' + lastName[0].toUpperCase() + lastName.slice(1)}</h2>
                    {age && gender && <p className="text-l font-bold ">{age + " " + gender[0].toUpperCase() + gender.slice(1)}</p>}

                    <p className="break-words">{about}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">

                        <span

                            className="px-2.5 py-0.5 bg-pink-50 text-pink-700 rounded-full text-xs font-medium hover:bg-pink-100 transition-colors duration-200"
                        >
                            {skills}
                        </span>

                    </div>

                    {location.pathname === "/" && <div className="card-actions my-3">
                        <button className="btn btn-primary" onClick={() => { handleRequest("ignored", _id) }}>ignore</button>
                        <button className="btn btn-secondary" onClick={() => { handleRequest("interested", _id) }}>interested</button>

                    </div>}
                </div>
            </div>


            {showToast && <div className="toast toast-top toast-center">
                <div className={(notify === 'interested') ? "alert alert-success" : "alert alert-warning"}>
                    {notify === 'interested' ? <span>Send Interested Successfully</span> : <span>Request Ignored Successfully</span>}
                </div>
            </div>}
        </>
    )
}

export default UserCard;
