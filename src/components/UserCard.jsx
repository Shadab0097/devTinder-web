import { useLocation } from "react-router-dom";

const UserCard = ({ user }) => {

    const location = useLocation()

    const { firstName, lastName, gender, age, about, skills, photoUrl } = user

    return (
        // <div className="card bg-base-300 w-96 shadow-xl ">
        //     <figure className="">
        //         {photoUrl && <img className=" h-56 w-56"
        //             src={photoUrl}
        //             alt="photo" />}
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{firstName + ' ' + lastName}</h2>
        //         {age && gender && <p>{age + " " + gender}</p>}


        //         <p className="break-words">{about}</p>
        //         <p className="break-words">{skills}</p>


        //         <div className="card-actions justify-center my-5">
        //             <button className="btn btn-primary">ignore</button>
        //             <button className="btn btn-secondary">interested</button>

        //         </div>
        //     </div>


        //     {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        //         <div className="">
        //             <img className="rounded-t-lg h-72 w-full" src={photoUrl} alt="" />
        //         </div>
        //         <div className="p-5">
        //             <a href="#">
        //                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        //             </a>
        //             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        //             <div className="card-actions justify-center my-5">
        //                 <button className="btn btn-primary">ignore</button>
        //                 <button className="btn btn-secondary">interested</button>

        //             </div>
        //         </div>
        //     </div> */}

        // </div>
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
                    <button className="btn btn-primary">ignore</button>
                    <button className="btn btn-secondary">interested</button>

                </div>}
            </div>
        </div>
        // <div className="card card-compact card-side bg-base-300 shadow-xl my-4 w-[30rem]">
        //     <figure>
        //         <img className=""
        //             src={photoUrl}
        //             alt="Movie" />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{firstName + ' ' + lastName}</h2>
        //         {age && gender && <p>{age + " " + gender}</p>}
        //         <p className="">{about}</p>
        //         {/* <p className="break-words"></p> */}
        //         <p className="">{skills}</p>

        //         {/* <div className="card-actions justify-center my-5">
        //             <button className="btn btn-primary">ignore</button>
        //         </div> */}
        //         <div className="card-actions justify-center my-4">
        //             <button className="btn btn-primary">ignore</button>
        //             <button className="btn btn-secondary">interested</button>

        //         </div>
        //     </div>
        // </div>
    )
}

export default UserCard;
