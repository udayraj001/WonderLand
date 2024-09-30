import React from "react";
import Navbar from "../sidebar/Navbar";

const Service = () => {
  return (
    <>
      <Navbar />
      <div className="w-full md:pl-20 md:pr-20 md:text-lg">
        <div className="w-full p-8">
          <div>
            <h1 className="w-full font-serif text-xl">
              WounderLand Centre in India
            </h1>
          </div>
          <div className="pt-8">
            <p className="text-thin text-[16px] tracking-wider text-gray-600">
              At <span className="font-semibold">Wonderland</span>, we believe
              that travel is not just a destination; it's an experience that
              enriches your life. Our mission is to create unforgettable
              memories by offering personalized travel services tailored to your
              unique needs and preferences. Whether you're planning a relaxing
              getaway, an adventurous expedition, or a cultural exploration, we
              are here to guide you every step of the way. What We Offer:
              Customized Itineraries: Our team of experienced travel consultants
              crafts unique travel itineraries that cater to your interests,
              budget, and schedule. We ensure that your journey reflects your
              desires and aspirations. Expert Guidance: With extensive knowledge
              of global destinations, we provide expert advice to help you make
              informed choices about your travel plans. From accommodations to
              activities, we have you covered. Hassle-Free Travel: We take the
              stress out of travel planning by handling all the details for you.
              From booking flights and hotels to arranging transfers and
              activities, we ensure a seamless travel experience.
              Customer-Centric Approach: Your satisfaction is our top priority.
              We are committed to providing exceptional customer service,
              ensuring that your needs are met before, during, and after your
              trip.
            </p>
          </div>
        </div>

        <div className="w-full p-8">
          <div>
            <h1 className="w-full font-serif text-xl">
              Recall/Campaign Lookup
            </h1>
          </div>
          <div className="pt-8">
            <p className="text-thin text-[16px] tracking-wider text-gray-600">
              At Wonderland, our mission is to transform your travel experience
              into something truly extraordinary. We strive to ensure that every
              journey with us is seamless and enjoyable, from the moment you
              book until you return home. Should any issues arise during your
              travel, we are dedicated to assisting you promptly so you can
              focus on making memories. To explore our offerings or inquire
              about any specific travel needs, feel free to reach out to us.
              We’re here to help you discover the wonders of travel without any
              hassle.
            </p>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Service;
