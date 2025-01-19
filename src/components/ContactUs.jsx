import React from 'react';

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mb-36">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

                <div className="space-y-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                            <p className="text-gray-600">
                                We're here to help! If you have any questions, concerns, or feedback,
                                please don't hesitate to reach out to us.
                            </p>
                        </div>

                        {/* Email */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Email Support</h3>
                            <p className="text-gray-600 mb-2">For general inquiries and support:</p>
                            <a
                                href="mailto:support@devtinder.site"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                support@devtinder.site
                            </a>
                            <p className="text-gray-500 text-sm mt-2">
                                We typically respond within 24-48 business hours.
                            </p>
                        </div>

                        {/* Office Address */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Operational Address</h3>
                            <address className="text-gray-600 not-italic">
                                Sector 14<br />
                                Gurugram, 122001<br />
                                Haryana, India
                            </address>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Business Hours</h3>
                            <div className="text-gray-600">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                                <p>Saturday: 9:00 AM - 2:00 PM (IST)</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="border-t border-gray-200 pt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Information</h2>
                        <div className="text-gray-600 space-y-4">
                            <p>
                                For faster response, please include relevant details in your email such as:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Your full name</li>
                                <li>Account email address (if applicable)</li>
                                <li>Detailed description of your inquiry</li>
                                <li>Any relevant screenshots or information</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                        Thank you for choosing DevTinder! We look forward to assisting you.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;