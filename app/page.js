


 'use client'

import React, { useEffect } from 'react';
import { WiDaySunny } from 'react-icons/wi';
import { FaEthereum, FaBitcoin } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Weather from './weather/page';
import NewsSection from './news/page';
import CryptoSection from './crypto/page';


export default function Dashboard (){
   

  // return (
  //   // <>
  //   // <div className="flex flex-col md:flex-row w-full h-screen bg-gray-100 p-4 gap-4">
      
  //   //   {/* Weather Section */}
  //   //   <div className="flex-1 bg-blue-100 rounded-2xl shadow-md p-6 flex flex-col justify-between">
  //   //     <h2 className="text-2xl font-bold text-blue-800 mb-4">🌤️ Weather Overview</h2>
  //   //     {tempdata ? (
  //   //       <>
  //   //         <div className="flex items-center gap-4">
  //   //           <WiDaySunny size={50} className="text-yellow-400" />
  //   //           <div>
  //   //             <h3 className="text-xl font-semibold">{tempdata.name}</h3>
  //   //             <p>{tempdata.description}</p>
  //   //           </div>
  //   //         </div>
  //   //         <div className="mt-4 text-lg">
  //   //           <p><strong>Temperature:</strong> {(tempdata.temp - 273.15).toFixed(1)} °C</p>
  //   //           <p><strong>Humidity:</strong> {tempdata.humidity}%</p>
  //   //           <p><strong>Wind Speed:</strong> {tempdata.wind} m/s</p>
  //   //         </div>
  //   //       </>
  //   //     ) : (
  //   //       <p className="text-gray-500">Loading weather...</p>
  //   //     )}
  //   //   </div>

  //   //   {/* Crypto Section */}
  //   //   <div className="flex-1 flex-col bg-gray-800 rounded-2xl shadow-md p-6 text-white">
  //   //     <Weather></Weather>
  //   //     <NewsSection></NewsSection>
  //   //   </div>
  //   // </div>
   
  //   // </>
  //   <div className='flex flex-col w-screen h-screen'>
  //     <div className='flex w-screen h-fit p-5'>
  //     <Weather></Weather>
  //     <NewsSection></NewsSection>
  //     </div>
  //     <div className='flex w-screen '>

  //     </div>
  //   </div>
  // );

  return (
    <div className="flex flex-col w-screen min-h-screen bg-gray-100 p-4 gap-4">
      {/* Top Section: Weather + News */}
      <div className="flex flex-col lg:flex-row gap-4 w-full">
  <div className="w-full lg:w-1/2">
    <Weather />
  </div>
  
  <div className="w-full lg:w-1/2">
    <NewsSection />
  </div>
</div>

      {/* Bottom Section: Crypto */}
      <div className="w-full bg-white rounded-xl shadow-md p-4">
        <CryptoSection />
      </div>
    </div>
  );
};


