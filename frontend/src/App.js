import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlertPopup from './components/AlertPopup';

const App = () => {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    const response = await axios.get('http://<backend-ip>:5000/api/data');
    setData(response.data);

    // Check if any PPM value exceeds 500
    const dangerousLevel = response.data.some((item) => item.ppm > 500);
    setShowPopup(dangerousLevel);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-primary mb-4">Fire Alert System</h1>
      <div className="space-y-4">
        {data.map((item) => (
          <div
            key={item._id}
            className={`p-4 border rounded-lg ${
              item.ppm > 500 ? 'bg-danger' : item.ppm > 200 ? 'bg-warning' : 'bg-success'
            }`}
          >
            <p className="text-white">PPM: {item.ppm}</p>
            <p className="text-white">
              Timestamp: {new Date(item.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {showPopup && <AlertPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default App;