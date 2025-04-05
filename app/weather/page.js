'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '@/lib/weatherSlice';

import { FaTemperatureLow, FaWind } from 'react-icons/fa';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { WiHumidity } from 'react-icons/wi';
import { BsClouds } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';

export default function Weather() {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const tempdata = useSelector((state) => state.weather);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      dispatch(fetchWeather(city));
    }
  };

  return (
    <div className="flex flex-col w-full h-full bg-white rounded-xl shadow-md p-5">
      <h1 className="text-2xl font-bold text-center text-blue-600">🌤️ Weather Info</h1>

      <form onSubmit={handleSubmit} className="flex justify-center mt-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          required
          className="border border-gray-300 rounded-l-md p-2 w-2/3 md:w-1/2 outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-md p-2"
        >
          Get Weather
        </button>
      </form>

      {tempdata.loading && (
        <p className="text-center mt-4 text-gray-600 font-medium">Loading...</p>
      )}

      {tempdata.error && (
        <p className="text-red-500 text-center mt-2">{tempdata.error}</p>
      )}

      {tempdata.name === 'None' ? (
        <div className="flex flex-1 items-center justify-center text-gray-600 mt-6">
          Please select your city to view weather data.
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center w-full gap-6">
          {/* Location Header */}
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
            <MdLocationPin className="text-red-600" size={24} />
            <h2>{tempdata.name}</h2>
          </div>

          {/* Weather Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full bg-blue-50 p-4 rounded-lg shadow-inner">
            <div className="flex items-center gap-3">
              <FaTemperatureLow size={32} className="text-blue-500" />
              <h1 className="text-lg">{tempdata.temp}°C</h1>
            </div>

            <div className="flex items-center gap-3">
              <TiWeatherPartlySunny size={32} className="text-yellow-500" />
              <p className="text-lg capitalize">{tempdata.description}</p>
            </div>

            <div className="flex items-center gap-3">
              <WiHumidity size={32} className="text-blue-400" />
              <p className="text-lg">Humidity: {tempdata.humidity}%</p>
            </div>

            <div className="flex items-center gap-3">
              <FaWind size={28} className="text-gray-600" />
              <p className="text-lg">Wind: {tempdata.wind} m/s</p>
            </div>

            <div className="flex items-center gap-3">
              <BsClouds size={28} className="text-gray-500" />
              <p className="text-lg">Clouds: {tempdata.clouds}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
