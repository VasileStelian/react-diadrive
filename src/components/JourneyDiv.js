import React from 'react';
import { ArrowNarrowRightIcon, ArrowNarrowLeftIcon } from '@heroicons/react/solid'

const HomeDiv = ({ title, content, showRightIcon }) => {
  return (
    <div className="flex items-center sm:mt md:ml-5  ">
      <div className="w-80 bg-gradient-to-b from-gray-600 py-20 px-2 transition ease-linear duration-500 hover:text-white hover:shadow-md hover:shadow-slate-700 shadow-lg rounded-md">
        <p className="text-center font-bold">{title}</p>
        <p className="text-center">{content}</p>
      </div>
      {showRightIcon ? (
        <ArrowNarrowRightIcon className="h-16 text-black hidden xl:block mt-4" />
      ) : (
        <ArrowNarrowLeftIcon className="h-16 text-black hidden xl:block mt-4" />
      )}
    </div>
  );
};

export default HomeDiv;
