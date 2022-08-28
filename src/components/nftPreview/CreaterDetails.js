import React from 'react';
import avatar from '../../assets/images/image-avatar.png';

const CreaterDetails = () => {
  return (
    <div className="mt-2 mb-2 flex items-center gap-4 border-t-[1px] border-slate-500 pt-4">
      <div className="w-10 rounded-full border-2 border-white">
        <img src={avatar} alt="Jules Wyvern" />
      </div>
      <p className="text-slate-300">
        Creation of{' '}
        <span className="cursor-pointer font-bold text-white transition duration-150 ease-in hover:text-teal-500">
          Jules Wyvern
        </span>
      </p>
    </div>
  );
};

export default CreaterDetails;
