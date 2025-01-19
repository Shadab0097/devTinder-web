import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mb-36">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
                <p className="text-lg text-gray-600 mb-8">
                    <strong>Effective Date:</strong> January, 2025
                </p>

                <p className="text-gray-600 mb-8">
                    At DevTinder.site, we are committed to providing exceptional services to our users.
                    We strive to ensure satisfaction with our platform and services. However, we understand
                    that situations may arise where a refund is necessary. Please carefully read our refund
                    policy outlined below.
                </p>

                <div className="space-y-8 text-gray-600">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eligibility for Refunds</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Subscription-Based Services</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Refund requests for subscription-based services must be submitted within 7 days
                                        of the initial subscription purchase.</li>
                                    <li>Refunds are not available for renewals or subsequent subscription cycles, as
                                        the user is responsible for managing their subscription settings.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. One-Time Purchases</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Refunds for one-time purchases (e.g., premium features, add-ons) are available
                                        if the service or product is found to be defective, unavailable, or misrepresented.</li>
                                    <li>Requests must be made within 14 days of the purchase date.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Non-Refundable Items</h2>
                        <p className="mb-3">We cannot offer refunds for the following:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Services that have already been rendered or consumed.</li>
                            <li>Accounts found to be in violation of our Terms of Service or Community Guidelines.</li>
                            <li>Trial periods, promotional offers, or discounts.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Request Process</h2>
                        <p className="mb-4">To request a refund:</p>

                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold mb-2">1. Email our support team at support@devtinder.site
                                    with the subject line "Refund Request."</p>
                            </div>

                            <div>
                                <p className="font-semibold mb-2">2. Include the following details:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Full Name</li>
                                    <li>Account Email Address</li>
                                    <li>Transaction ID or Receipt Number</li>
                                    <li>Reason for the Refund Request</li>
                                </ul>
                            </div>
                        </div>

                        <p className="mt-4">
                            Our team will review your request within 5-7 business days. You may be required to
                            provide additional information to process your refund.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Approval</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>If approved, the refund will be processed to the original payment method within
                                10-14 business days, depending on your bank or payment provider.</li>
                            <li>If your request is denied, we will provide a detailed explanation and explore
                                possible resolutions.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Policy</h2>
                        <p>
                            DevTinder.site reserves the right to modify or update this refund policy at any time.
                            Changes will be effective immediately upon posting on this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                        <p>For further assistance, feel free to contact us at:</p>
                        <p className="mt-2">
                            <strong>Email:</strong> support@devtinder.site
                        </p>
                    </section>
                </div>

                <div className="mt-12 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                        Last updated: January 18, 2025
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Thank you for choosing DevTinder.site! We value your trust and look forward to serving you.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RefundPolicy;