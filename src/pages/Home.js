import React from 'react';
import WalletCard from '../components/WalletCard';
import Send from '../components/Send';
import Receive from '../components/Receive';

const Home = () => {
  return (
    <div className="p-4 space-y-6">
      <WalletCard />
      <div className="grid grid-cols-2 gap-4">
        <Send />
        <Receive />
      </div>
    </div>
  );
};

export default Home;
