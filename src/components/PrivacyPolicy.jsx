const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mb-36">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

                <div className="space-y-6 text-gray-600">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
                        <p>We collect information to provide, improve, and personalize your experience with DevTinder:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Account Information:</strong> Name, email, username, profile picture, and other details you provide.</li>
                            <li><strong>Profile Information:</strong> Bio, skills, preferences, and location.</li>
                            <li><strong>Communication Data:</strong> Messages and interactions between you and other users or our support team.</li>
                            <li><strong>Device Data:</strong> IP address, operating system, browser type, and usage patterns.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
                        <p>We use your information to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Operate DevTinder and enhance its functionality.</li>
                            <li>Customize your experience and facilitate connections.</li>
                            <li>Communicate updates, respond to inquiries, and provide support.</li>
                            <li>Ensure safety, prevent fraud, and monitor compliance with our terms.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">3. How We Share Your Information</h2>
                        <p>We may share your data in the following scenarios:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>With Other Users:</strong> Profile information for meaningful connections.</li>
                            <li><strong>With Service Providers:</strong> Hosting, analytics, or operational support.</li>
                            <li><strong>Legal Obligations:</strong> When required by law or to protect our rights.</li>
                            <li><strong>Business Transfers:</strong> If DevTinder merges, is acquired, or undergoes restructuring.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Your Rights and Choices</h2>
                        <p>You have rights regarding your data:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access and update personal information through your account settings.</li>
                            <li>Request account deletion and associated data removal.</li>
                            <li>Opt out of marketing communications.</li>
                            <li>Control cookie preferences via your browser settings.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Security</h2>
                        <p>We implement security measures to protect your data but encourage the use of strong passwords to safeguard your account.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Children’s Privacy</h2>
                        <p>DevTinder is intended for users aged 18 and above. We do not knowingly collect data from children under 18.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Changes to This Privacy Policy</h2>
                        <p>We may update this policy periodically. Significant changes will be communicated through the app or via email.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Contact Us</h2>
                        <p>If you have any questions or concerns, contact us at:</p>
                        <p>
                            <a href="mailto:support@devtinder.site" className="text-blue-600 hover:text-blue-800">
                                support@devtinder.site
                            </a>
                        </p>
                    </section>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">Last updated: January 18, 2025</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
