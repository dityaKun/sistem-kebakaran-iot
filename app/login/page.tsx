"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  BiUser,
  BiLockAlt,
  BiLogoGoogle,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
} from "react-icons/bi";

export default function LoginRegisterPage() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <>
      <Head>
        <title>{isRegistering ? "Register" : "Login"} - Monitoring System</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] font-sans">
        <div className="relative w-[900px] h-[550px] bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div
            className={`absolute top-0 left-0 w-full h-full flex transition-transform duration-700 ease-in-out ${
              isRegistering ? "-translate-x-1/2" : "translate-x-0"
            }`}
          >
            {/* Login Form */}
            <div className="w-1/2 flex flex-col justify-center items-center px-10 bg-white z-10">
              <form className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-4">Login</h1>
                <div className="mb-4 relative">
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    className="w-full px-10 py-2 border border-gray-300 rounded-xl focus:outline-none"
                  />
                  <BiUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-xl text-gray-500" />
                </div>
                <div className="mb-4 relative">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="w-full px-10 py-2 border border-gray-300 rounded-xl focus:outline-none"
                  />
                  <BiLockAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-xl text-gray-500" />
                </div>
                <div className="text-right text-sm text-indigo-600 hover:underline mb-4">
                  <a href="#">Forgot Password?</a>
                </div>
                <Link href="/dashboard">
                  <button
                    type="button"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-semibold"
                  >
                    Login
                  </button>
                </Link>
                <p className="text-sm mt-4 mb-2">or login with social platforms</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-xl text-gray-600 hover:text-indigo-500">
                    <BiLogoGoogle />
                  </a>
                  <a href="#" className="text-xl text-gray-600 hover:text-indigo-500">
                    <BiLogoFacebook />
                  </a>
                  <a href="#" className="text-xl text-gray-600 hover:text-indigo-500">
                    <BiLogoTwitter />
                  </a>
                  <a href="#" className="text-xl text-gray-600 hover:text-indigo-500">
                    <BiLogoInstagram />
                  </a>
                </div>
              </form>
            </div>

            {/* Register Form */}
            <div className="w-1/2 flex flex-col justify-center items-center px-10 bg-white z-10">
              <form className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-4">Register</h1>
                <div className="mb-4 relative">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full px-10 py-2 border border-gray-300 rounded-xl focus:outline-none"
                  />
                  <BiUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-xl text-gray-500" />
                </div>
                <div className="mb-4 relative">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full px-10 py-2 border border-gray-300 rounded-xl focus:outline-none"
                  />
                  <BiUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-xl text-gray-500" />
                </div>
                <div className="mb-4 relative">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="w-full px-10 py-2 border border-gray-300 rounded-xl focus:outline-none"
                  />
                  <BiLockAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-xl text-gray-500" />
                </div>
                <Link href="/dashboard">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-semibold"
                  >
                    Register
                  </button>
                </Link>
              </form>
            </div>
          </div>

          {/* Overlay Panel */}
          <div className="absolute top-0 left-1/2 w-1/2 h-full bg-indigo-600 text-white flex flex-col justify-center items-center px-8 transition-all duration-700 ease-in-out z-20">
            <h2 className="text-3xl font-bold mb-4">
              {isRegistering ? "Welcome Back!" : "Hello, Friend!"}
            </h2>
            <p className="mb-6 text-center">
              {isRegistering
                ? "To keep connected with us please login with your personal info."
                : "Enter your personal details and start your journey with us."}
            </p>
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              {isRegistering ? "Login" : "Register"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
