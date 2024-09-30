import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="bg-gradient-to-r from-white to-gray-100 p-6 md:pl-24 md:pr-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Office Information */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-start gap-2 text-gray-600">
            <FaMapMarkerAlt className="text-2xl mx-auto md:mx-0" />
            <h3 className="text-md font-semibold my-2">Our Offices</h3>
          </div>
          <p className="text-gray-600 text-xs">
            Located across the country, ready to assist in planning & booking
            your perfect vacation.
          </p>
          <a href="#" className="text-blue-900 font-semibold">
            Locate Us
          </a>
        </div>

        {/* Call Us */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-start gap-2 text-gray-600">
            <FaPhoneAlt className="text-2xl mx-auto md:mx-0" />
            <h3 className="text-md font-semibold my-2">Call us</h3>
          </div>

          <p className="text-gray-600 text-xs">
            Request a quote, or just chat about your next vacation. We’re always
            happy to help!
          </p>
          <a href="tel:1800227979" className="text-blue-900 font-semibold">
            8459686970
          </a>
        </div>

        {/* Write to Us */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-start gap-2 text-gray-600">
            <FaEnvelope className="text-2xl mx-auto md:mx-0" />
            <h3 className="text-md font-semibold my-2">Write to us</h3>
          </div>
          <p className="text-gray-600 text-xs">
            Be it an enquiry, feedback or a simple suggestion, write to us.
          </p>
          <a
            href="udayrajghorpade2503@gmail.com"
            className="text-blue-900 font-semibold"
          >
            travel@wonderland.com
          </a>
        </div>

        {/* Connect with Us */}
        <div className="text-center md:text-left">
          <h3 className="text-md font-semibold my-2 text-gray-600">Connect with us</h3>
          <p className="text-gray-600 text-xs">Reviews, podcasts, blogs and more...</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="https://github.com/udayraj001" className="text-gray-600">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="https://x.com/ud2503" className="text-gray-600">
              <FaYoutube className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/udayraj-ghorpade/" className="text-gray-600">
              <FaLinkedinIn className="text-xl" />
            </a>
            <a href="https://udayraj.vercel.app/" className="text-gray-600">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
