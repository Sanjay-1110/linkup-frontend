export default function Login() {
    return (
      <div className="w-screen h-screen bg-black flex items-center justify-center text-white">
        <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-400">Login</h1>
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-400 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <a href="/create-account" className="text-blue-600 hover:underline">
              Create one
            </a>
          </p>
        </div>
      </div>
    );
  }
  