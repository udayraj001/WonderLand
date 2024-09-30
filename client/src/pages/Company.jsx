import React from "react";
import Navbar from "../sidebar/Navbar";
import Header from "../companyComponents/Header";
import Middle from "../companyComponents/Middle";
import TopDestinations from "../companyComponents/TopDestinations";
import CompanyCard from "../companyComponents/CompanyCard";

const Company = () => {
  return (
    <>
      <Navbar />
      <div>
        <Header />
      </div>
      <div>
        <Middle />
      </div>
      <div>
        <TopDestinations />
      </div>
      <div>
        <CompanyCard />
      </div>
    </>
  );
};

export default Company;

// <div>
//                 <h2>Journey Data</h2>
//                 {jdata ? (
//                     jdata.map((item, index) => (
//                         <div key={index}>
//                             <h3>{item.id}</h3>
//                             <p>{item.cName}</p>
//                             <h3>{item.emailAddress}</h3>
//                             <p>{item.phone}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>Loading...</p>
//                 )}
//             </div>

// <div>
//                 <h2>Company Data</h2>
//                 {data ? (
//                     data.map((item, index) => (
//                         <div key={index}>
//                             <h3>{item.id}</h3>
//                             <p>{item.cName}</p>
//                             <h3>{item.emailAddress}</h3>
//                             <p>{item.phone}</p>
//                             <p>{item.address}</p>
//                             <p>{item.gst_no}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <div className='w-full flex items-center justify-center'>
//                     <p className='text-3xl'>Loading...</p>
//                     </div>
//                 )}
//             </div>
