import React from 'react';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mb-36">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>

                {/* Welcome Section */}
                <div className="prose max-w-none text-gray-600 mb-8">
                    <p className="text-lg mb-6">
                        Welcome to DevTinder.site – where developers connect, collaborate, and grow together.
                    </p>
                    <p className="mb-8">
                        At DevTinder.site, we believe that great ideas are born when talented developers come together.
                        Our platform is designed to bridge the gap between individual talent and collaborative innovation,
                        helping developers of all skill levels find their perfect match for projects, mentorship, or
                        knowledge sharing.
                    </p>
                </div>

                {/* Mission Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600">
                        To empower developers worldwide by fostering a community that values collaboration,
                        innovation, and growth. Whether you're a seasoned programmer or just starting your
                        coding journey, DevTinder.site is your space to connect with like-minded individuals
                        and achieve your goals.
                    </p>
                </section>

                {/* What We Offer Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Networking Opportunities</h3>
                            <p className="text-gray-600">
                                Meet developers from around the globe who share your interests and expertise.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Collaboration Spaces</h3>
                            <p className="text-gray-600">
                                Find your next coding partner or team for freelance projects, startups, or
                                open-source contributions.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Skill Building</h3>
                            <p className="text-gray-600">
                                Learn and grow through community discussions, knowledge sharing, and mentorship programs.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Matching</h3>
                            <p className="text-gray-600">
                                Discover projects that align with your skills and interests, or showcase your own
                                ideas to attract collaborators.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why DevTinder Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why DevTinder.site?</h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-600 mb-4">
                            We understand the challenges developers face when looking for the right collaborators
                            or resources. That's why we created a platform that prioritizes meaningful connections,
                            seamless communication, and a supportive community.
                        </p>
                        <p className="text-gray-600">
                            At DevTinder.site, you're not just finding a coding partner—you're building lasting
                            professional relationships and driving innovation in the tech world.
                        </p>
                    </div>
                </section>

                {/* Join Us Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us Today</h2>
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <p className="text-gray-800 font-medium">
                            Start your journey with DevTinder.site and become part of a global network of
                            passionate developers. Together, let's code the future!
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutUs;