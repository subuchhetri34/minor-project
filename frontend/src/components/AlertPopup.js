import React, { useEffect } from 'react';

const AlertPopup = ({ onClose }) => {
  useEffect(() => {
    const alarmSound = new Audio('/alarm.wav');
    alarmSound.loop = true; // Loop the alarm sound
    alarmSound.play();

    return () => {
      alarmSound.pause(); // Stop the alarm when the popup is closed
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-danger mb-4">⚠️ Danger!</h2>
        <p className="text-gray-700 mb-4">
          Gas levels have exceeded 500 PPM. Evacuate immediately!
        </p>
        <button
          onClick={onClose}
          className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-primary"
        >
          Acknowledge
        </button>
      </div>
    </div>
  );
};

export default AlertPopup;