import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaGoogle,
  FaFacebookF,
  FaApple,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import login from '../assets/login.png'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/Car/Login/", {
        email,
        password,
      });
      localStorage.setItem("accessToken", response.data.access);
      setMessage("Logged in successfully");
      alert("Successfully Login");
      navigate("/company"); // Redirect to dashboard
    } catch (error) {
      console.log(error);
      alert('Error')
      setMessage(error.response.data.error || "Invalid credentials");
    }
  };

  return (
    <div className="bg-gradient-to-b from-orange-100 to-white min-h-screen flex flex-col justify-center items-center">
      {/* Container */}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        {/* Top Image */}
        <img
          src={login}
          alt="Login"
          className="mx-auto w-42 h-32"
        />

        {/* Login Heading */}
        <h2 className="text-xl font-bold text-gray-700 mb-4">Login</h2>

        {/* Form Inputs */}
        <div className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border rounded-full text-gray-700 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border rounded-full text-gray-700 focus:outline-none"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-gray-500">
              Forgot Password?
            </a>
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="bg-orange-200 hover:bg-pink-300 text-white font-semibold py-2 px-4 rounded-full w-full mt-6"
        >
          Login
        </button>

        {/* Divider */}
        <div className="my-4 text-gray-400">- or -</div>

        {/* Social Login Options */}
        <div className="flex justify-center space-x-6">
          <FaGoogle className="text-2xl text-gray-500" />
          <FaFacebookF className="text-2xl text-gray-500" />
          <FaApple className="text-2xl text-gray-500" />
        </div>

        {/* Sign up */}
        <div className="mt-4 text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-orange-600 font-semibold">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
