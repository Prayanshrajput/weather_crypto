
 'use client'
import { fetchCryptoData } from '@/lib/cryptoSlice';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function CryptoSection(){
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.crypto);

 
  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  if (loading) return <div>Loading crypto data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4  text-blue-600">Cryptocurrency Prices</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data.map((coin) => (
          <div key={coin.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg">{coin.name} ({coin.symbol.toUpperCase()})</h3>
            <p>💰 Price: ${coin.current_price.toLocaleString()}</p>
            <p>📈 24h Change: {coin.price_change_percentage_24h.toFixed(2)}%</p>
            <p>🏦 Market Cap: ${coin.market_cap.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

