import { useState } from "react"
import UserCard from "./UserCard"
// import { BASE_URL } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import axios from "axios"
import { BASE_URL } from "../utils/constant"
import Spinner from "./Spinner"
// import { SiNasa } from "react-icons/si"


const EditProfile = ({ userProfile }) => {
    const [firstName, setFirstName] = useState(userProfile.firstName)
    const [lastName, setLastName] = useState(userProfile.lastName)
    const [photoUrl, setPhotoUrl] = useState(userProfile.photoUrl)
    const [age, setAge] = useState(userProfile.age || '')
    const [gender, setGender] = useState(userProfile.gender || '')
    const [about, setAbout] = useState(userProfile.about)
    const [skills, setSkills] = useState(userProfile.skills)
    const [error, setError] = useState()
    const [showToast, setShowToast] = useState(false)
    const dispatch = useDispatch()
    const [updateSpinner, setUpdateSpinner] = useState(false)


    const saveProfile = async () => {
        setUpdateSpinner(true)
        setError('')
        try {

            const formData = new FormData()
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('age', age);
            formData.append('gender', gender);
            formData.append('about', about);
            formData.append('skills', skills);

            if (photoUrl instanceof File) {
                formData.append('file', photoUrl);
            }



            const res = await axios.patch(BASE_URL + "profile/edit", formData, { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } })
            if (res.status === 200) {
                setUpdateSpinner(false)
            }
            dispatch(addUser(res?.data?.data))
            setShowToast(true)
            setTimeout(() => {
                setShowToast(false)

            }, 3000)


        } catch (err) {
            console.log(err)
            setError(err.response.data)
            setUpdateSpinner(false)
        }

    }

    return userProfile && (
        <div className="w-full mt-12">
            <div className="flex  flex-wrap-reverse mb-48  ">


                {/* <div className="bg-base-300 my-2 rounded-2xl mx-5 "> */}
                <div className=" px-4 mx-auto max-w-2xl lg:py-16 m-auto bg-base-300 my-2 rounded-2xl shadow-xl  ">
                    <h2 className=" my-2 pb-2 border-b-4  border-cyan-100  mb-12 text-2xl font-bold text-gray-900 dark:text-white flex justify-center">Edit Profile</h2>

                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 ">
                        <div className="sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                            <input value={firstName} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input value={lastName} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo Url</label>
                            {/* <input value={photoUrl} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setPhotoUrl(e.target.value)} /> */}
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={(e) => setPhotoUrl(e.target.files[0])} />
                        </div>
                        <div className="w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                            <input value={age} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                            <select value={gender} className="select select-bordered w-full max-w-xs" onChange={(e) => setGender(e.target.value)}>
                                {/* <option value="" disabled>Select gender</option> */}
                                <option value="male">Male</option>             <option value="female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skills </label>
                            <input value={skills} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setSkills(e.target.value)} />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About</label>

                            <textarea value={about} className="textarea textarea-bordered w-full" placeholder="..." onChange={(e) => setAbout(e.target.value)}></textarea>
                        </div>
                    </div>
                    <p className="text-red-500">{error}</p>
                    <div className="card-actions justify-center my-6">
                        <button className="btn btn-primary" onClick={saveProfile} >{updateSpinner ? <Spinner /> : 'Save Profile'}</button>
                    </div>

                </div>




                <div className="my-2 m-auto">
                    <UserCard user={{ firstName, lastName, photoUrl, age, gender, about, skills }} />
                </div>
            </div>

            {showToast && <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Profile Saved successfully.</span>
                </div>
            </div>}

        </div>
    )
}

export default EditProfile



