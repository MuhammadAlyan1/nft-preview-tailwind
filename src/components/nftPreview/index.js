import React from 'react';
import nftImage from '../../assets/images/image-equilibrium.jpg';
import EthDetails from './EthDetails';
import CreaterDetails from './CreaterDetails';

const NftPreview = () => {
  return (
    <section className="w-80 rounded-2xl bg-gray-800 p-5 text-slate-100  shadow-lg shadow-slate-900 md:w-[420px]">
      <div className="relative w-full overflow-hidden rounded-xl before:absolute before:left-1/2 before:top-1/2 before:z-10 before:h-11 before:translate-x-[-50%] before:translate-y-[-50%] before:bg-view-icon before:bg-no-repeat before:p-6 before:opacity-0 before:transition before:duration-150 before:ease-in after:absolute after:inset-0 after:bg-teal-500 after:opacity-0 after:transition after:duration-150 after:ease-in hover:cursor-pointer hover:before:opacity-100 hover:after:opacity-50">
        <img src={nftImage} alt="nft" />
      </div>
      <div>
        <p className="mt-4 mb-4 cursor-pointer text-2xl font-bold transition duration-150 ease-in hover:text-teal-500">
          Equilibrium #3429
        </p>
        <p className="text-slate-300">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <EthDetails />
        <CreaterDetails />
      </div>
    </section>
  );
};

export default NftPreview;
