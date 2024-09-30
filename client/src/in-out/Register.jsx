import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // For icons
import register from '../assets/register.png'
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/Car/Register/', { email, password });
      setMessage(response.data.message);
      alert('Successfully Registered');
      navigate('/company');
    } catch (error) {
      setMessage(error.response.data.error || 'Something went wrong');
    }
  };

  return (
    <div className="bg-gradient-to-b from-pink-100 to-white min-h-screen flex flex-col justify-center items-center">
      
      {/* Container */}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        
        {/* Top Image */}
        <img 
          src={register}
          alt="Register" 
          className="mx-auto mb-4"
        />
        
        {/* Register Heading */}
        <h2 className="text-2xl font-bold text-brown-700 mb-4">Register</h2>
        
        {/* Form Inputs */}
        <div className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input 
              type="email" 
              placeholder="email@gmail.com" 
              className="w-full pl-10 pr-3 py-2 border rounded-full text-gray-700 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="w-full pl-10 pr-3 py-2 border rounded-full text-gray-700 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Register Button */}
        <button 
          onClick={handleRegister}
          className="bg-orange-200 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-full w-full mt-6"
        >
          Register
        </button>

        {/* Error Message */}
        {message && <p className="mt-4 text-red-500">{message}</p>}

        {/* Already Registered */}
        <div className="mt-4 text-sm">
          Already have an account? <a href="/login" className="text-orange-600 font-semibold">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
