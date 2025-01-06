

const ErrorPage = ({
    title = "Oops! Something went wrong",
    message = "We're having trouble connecting the perfect match. Please try again.",
    code = "404"
}) => {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-8">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="mb-8">
                    <span className="text-9xl font-bold bg-gradient-to-r from-cyan-100 to-slate-400 text-transparent bg-clip-text">
                        {code}
                    </span>
                </div>

                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                    {title}
                </h1>

                <p className="text-gray-600 mb-8">
                    {message}
                </p>

                <div className="space-y-4">
                    <button
                        onClick={() => window.location.href = '/'}
                        className="w-full py-3 px-6 text-white font-medium bg-gradient-to-r from-cyan-100 to-slate-400 rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Back to Home
                    </button>

                    <button
                        onClick={() => window.location.reload()}
                        className="w-full py-3 px-6 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Try Again
                    </button>
                </div>

                <div className="mt-8 text-sm text-gray-500">
                    <p>Need help? <a href="#" className="text-teal-600 hover:underline">Contact Support</a></p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;