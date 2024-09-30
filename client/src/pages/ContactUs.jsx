// import React from "react";
// import Navbar from "../sidebar/Navbar";
// import FindNearest from "../contactComponents/FindNearest";

// const ContactUs = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="w-full">
//         <div className="w-full bg-blue-900 text-white  flex items-center justify-center pl-4 pr-4">
//           <div className="mt-10">
//             {/* Title */}
//             <h1 className="text-4xl font-bold mb-1">Contact Us Today!</h1>
//             <span className="inline-block w-20 h-1 bg-yellow-400"></span>

//             {/* Two Sections for Contact Details */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
//               {/* Indian Guests */}
//               <div>
//                 <h2 className="font-bold mb-1">For Indian Guests</h2>
//                 <p className="flex items-center mb-1">
//                   <span role="img" aria-label="phone" className="mr-2">
//                     📞
//                   </span>{" "}
//                   8459686970
//                 </p>
//                 <p className="flex items-center mb-1">
//                   <span role="img" aria-label="email" className="mr-2">
//                     ✉️
//                   </span>{" "}
//                   udayrajghorpade2503@gmail.com
//                 </p>
//               </div>

//               {/* Foreign Nationals/NRIs */}
//               <div>
//                 <h2 className="font-bold mb-2">
//                   For Foreign Nationals/NRIs traveling to India
//                 </h2>
//                 <p className="flex items-center mb-2">
//                   <span role="img" aria-label="phone" className="mr-2">
//                     📞
//                   </span>{" "}
//                   1800 00 5055
//                 </p>
//                 <p className="flex items-center mb-2">
//                   <span role="img" aria-label="email" className="mr-2">
//                     ✉️
//                   </span>{" "}
//                   wonderland@gmail.com
//                 </p>
//               </div>
//             </div>

//             {/* Form Section */}
//             <div className="mt-8 ">
//               <h2 className="font-bold text-lg mb-4">Want us to call you?</h2>
//               <div className="flex flex-col md:flex-row items-center gap-4  md:block ">
//                 {/* Full Name Input */}
//                 <div className="flex flex-col gap-2">
//                   <input
//                     type="text"
//                     placeholder="Full Name*"
//                     className="p-3 w-full md:w-1/3 border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-300"
//                   />

//                   <input
//                     type="text"
//                     placeholder="+91*"
//                     className="p-3 w-full md:w-1/3 border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-300"
//                   />
//                 </div>
//                 {/* Country Code */}

//                 {/* Request Call Back Button */}
//                 <button className="bg-yellow-400 text-black font-bold p-3 rounded-md hover:bg-yellow-500 transition mb-2">
//                   📞 Request Call Back
//                 </button>
//               </div>
//             </div>

//             {/* Right-Side Image */}
//             <div className="hidden md:block absolute right-0 bottom-0">
//               <img
//                 src="https://www.veenaworld.com/assets/images/contact.png"
//                 alt="Team"
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//         <div>
//           <FindNearest />
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactUs;

import React from "react";
import Navbar from "../sidebar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactForm from "../contactComponents/ContactForm";
const ContactUs = () => {
  return (
    <div>
      <Navbar />

      <div className="w-full md:pl-32 md:pr-32 md:flex md:space-x-6 mt-20">
        {/* Left */}
        <div>
          <div className=" p-6 rounded-lg shadow-md mt-5">
            <h2 className="text-[#5E6282] text-xl font-bold mb-4">
              Let's Talk With Us
            </h2>
            <p className="text-[#5E6282] font-semibold text-sm mb-4 mt-5">
              Questions, comments, or suggestions? Simply fill in the form and
              we'll be in touch shortly.
            </p>
            <ul className="text-[#5E6282] mt-8">
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faLocationArrow} className="mr-2" />
                <span>1055 Arthur ave Elk Groot, 67.</span>
                <br />
                <span>New Palmas South Carolina.</span>
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span>+91  8459 6869 70</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span>udayrajghorpade2503@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right */}
        <div>
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
