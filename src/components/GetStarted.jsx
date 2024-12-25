
// import { FaCode, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaCode, FaUsers, FaLaptopCode } from "react-icons/fa";

const GetStarted = () => {
    const navigate = useNavigate()
    // const handleGetStarted = () => {
    //     navigate('/')
    // };

    return (



        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex ">
            <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
                <div className="flex justify-center space-x-6 mb-8">
                    <div className="animate-bounce-slow">
                        <FaCode className="text-6xl text-indigo-500" />
                    </div>
                    <div className="animate-bounce-slow delay-100">
                        <FaUsers className="text-6xl text-purple-500" />
                    </div>
                    <div className="animate-bounce-slow delay-200">
                        <FaLaptopCode className="text-6xl text-indigo-500" />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Welcome to DevTinder!
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                    Connect with like-minded developers and start building your network
                </p>

                <div className="mb-12">
                    <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg text-lg transition-transform duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
                        Get Started
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Swipe & Connect</h3>
                        <p className="text-gray-500">Find developers who share your interests and tech stack</p>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Collaborate</h3>
                        <p className="text-gray-500">Join forces on exciting projects and build something amazing</p>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Grow Together</h3>
                        <p className="text-gray-500">Learn, share knowledge, and level up your skills</p>
                    </div>
                </div>

                <p className="mt-8 text-gray-400 text-sm">
                    Join thousands of developers who have already found their perfect match
                </p>
            </div>
        </div>

    );
};

export default GetStarted;