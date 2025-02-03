import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import axios from "axios";

const PremiumUser = () => {
    const [showMembershipTYpe, setShowMembershipType] = useState('')

    const premiumUser = async () => {
        const res = await axios.get(BASE_URL + "premium/verify", { withCredentials: true })
        console.log(res)
        setShowMembershipType(res?.data)

    }

    useEffect(() => {
        premiumUser()
    }, [])

    const silverBenefit = [
        " Chat with Other People",
        "Up to 100 Connection Request per Day",
        "Blue Tick",
        "3 Months"
    ]
    const goldBenefit = [
        " 24/7 Support",
        "Premium Services",
        " Chat with Other People",
        " Unlimited Connection Request Per Day",
        " Blue Tick",
        " 6 Months"
    ]

    const date = new Date(showMembershipTYpe.updatedAt);
    date.setMonth(showMembershipTYpe.membershipType === 'gold' ? date.getMonth() + 6 : date.getMonth() + 3);

    // Format: YYYY-MM-DDTHH:mm:ss.sssZ
    const localString = date.toDateString();

    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center p-4 mb-44 mt-[-5rem]">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 animate-gradient">
                    <div className="bg-white rounded-t-xl">
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                                    <h3 className="text-xl font-bold">Premium Status({showMembershipTYpe?.membershipType?.toUpperCase()})</h3>
                                </div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                                    ACTIVE
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-gray-900">Member Benefits</h4>
                        <ul className="space-y-3">
                            {showMembershipTYpe?.membershipType === "silver" ? silverBenefit.map((benefit, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <svg className="h-5 w-5 text-purple-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">{benefit}</span>
                                </li>
                            )) : goldBenefit.map((benefit, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <svg className="h-5 w-5 text-purple-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">{benefit}</span>
                                </li>))}
                        </ul>
                    </div>

                    <div className="pt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Next billing date</p>
                                <p className="text-gray-900 font-medium">{localString}</p>
                            </div>
                            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity duration-200">
                                Manage Plan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumUser;