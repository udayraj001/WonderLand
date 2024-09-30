import React, { useState } from 'react';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log({ firstName, lastName, email, phoneNumber, message });
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md mt-5 ">
      <form onSubmit={handleSubmit}>
        
        <div className="flex space-x-1 ">
          <input
            type="text"
            placeholder="First Name*"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border w-1/2 rounded-md p-2"
          />
          <input
            type="text"
            placeholder="Last Name*"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border w-1/2 rounded-md p-2"
          />
        </div>
        <div className="mt-2">
          <input
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div className="mt-2">
          <input
            type="tel"
            placeholder="Phone Number*"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div className="mt-2">
          <textarea
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border rounded-md p-2 w-full h-24"
          ></textarea>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
            onClick={()=> alert('Message Sent Successfully')}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;