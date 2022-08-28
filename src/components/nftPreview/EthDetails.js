import React from 'react';
import ethIcon from '../../assets/images/icon-ethereum.svg';
import clockIcon from '../../assets/images/icon-clock.svg';

const EthDetails = () => {
  return (
    <div className="mt-6 mb-6 flex justify-between">
      <div className="flex items-center gap-2">
        <img src={ethIcon} alt="eth" />
        <p className="cursor-pointer font-bold transition duration-150 ease-in hover:text-teal-500">
          0.041 ETH
        </p>
      </div>
      <div className="flex items-center gap-2">
        <img src={clockIcon} alt="clock" />
        <p className="text-slate-300">3 days left</p>
      </div>
    </div>
  );
};

export default EthDetails;
