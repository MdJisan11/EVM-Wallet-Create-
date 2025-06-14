import React from 'react';

const Receive = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="font-semibold mb-2">Receive</h3>
      <p>Your Address:</p>
      <code>0xYourAddressHere...</code>
      <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Copy</button>
    </div>
  );
};

export default Receive;
