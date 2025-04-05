'use client';

import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

export default function NotificationManager() {
  useEffect(() => {
    const socket = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum');

    socket.onmessage = (msg) => {
      const data = JSON.parse(msg.data);

      Object.entries(data).forEach(([key, value]) => {
        const price = parseFloat(value);
        if (price > 70000 || price < 30000) {
          toast.custom((t) => (
            <div
              className={`bg-white shadow-lg rounded-lg p-4 border-l-4 ${
                key === 'bitcoin' ? 'border-yellow-500' : 'border-indigo-500'
              }`}
            >
              <strong className="text-lg capitalize">{key} Alert</strong>
              <p>🚨 Significant price move: ${price.toFixed(2)}</p>
              <small className="text-xs text-gray-500">type: price_alert</small>
            </div>
          ));
        }
      });
    };

    return () => {
      socket.close();
    };
  }, []);

  return null;
}
