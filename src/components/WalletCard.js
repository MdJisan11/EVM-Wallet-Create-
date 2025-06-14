import React from 'react';

const WalletCard = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold">Wallet A - Account 01</h2>
      <p>0xYourAddressHere... <button>Copy</button></p>
      <p>Total Assets: $1234.56</p>
    </div>
  );
};

export default WalletCard;
