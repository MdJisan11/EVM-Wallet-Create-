import React from 'react';

const Send = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="font-semibold mb-2">Send</h3>
      <input type="text" placeholder="Recipient Address" className="w-full mb-2 border p-2 rounded" />
      <input type="number" placeholder="Amount" className="w-full mb-2 border p-2 rounded" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
    </div>
  );
};

export default Send;
