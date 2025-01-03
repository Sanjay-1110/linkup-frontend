import logo from '../assets/logo.jpg';
import { Link } from "react-router-dom";
export default function PreHome() {
    return (
        <div className="w-screen h-screen bg-black flex">
            {/* Left Section */}
            <div className="w-1/2 h-full flex items-center justify-center">
                <img src={logo} alt="logo" className="h-2/3 object-contain" />
            </div>

            {/* Right Section */}
            <div className="w-1/2 h-full flex flex-col items-start justify-center px-12 text-white">
                {/* Slogan */}
                <div className="text-4xl lg:text-6xl font-semibold text-blue-300 leading-snug">
                    Where Campus Lives Beyond Graduation
                </div>

                {/* Buttons */}
                <div className="flex gap-6 mt-16">
                    {/* Create Account Button */}
                    <Link to="/create-account">
                      <div className="relative group">
                          <div className="absolute -inset-px transition-all duration-1000 opacity-70 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1"></div>
                          <button
                              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                          >
                              Create Account
                          </button>
                      </div>
                    </Link>

                    {/* Login Button */}
                    <Link to="/login">
                    <div className="relative group">
                        <div className="absolute -inset-px transition-all duration-1000 opacity-70 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1"></div>
                        <button
                            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        >
                            Login
                        </button>
                    </div></Link>
                </div>
            </div>
        </div>
    );
}

