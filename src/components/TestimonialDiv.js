import React from 'react';
import { AnnotationIcon } from '@heroicons/react/outline'

const TestimonialDiv = ({ name, content, imageUrl }) => {
  return (
    <div className="basis-1/3 min-w-300 mb-8 bg-gradient-to-b from-gray-600 p-4 transition ease-linear duration-500 hover:bg-black hover:text-white hover:shadow-md hover:shadow-slate-700 shadow-xl rounded-md">
    <AnnotationIcon className="h-6 mb-2 items-center mx-auto text-black hidden sm:block " />
      <p className="cursor-default mb-5 text-center">{content}</p>
      <img className="items-center mx-auto rounded-full h-36" src={imageUrl} alt="img" />
      <h1 className="text-center mt-2">{name}</h1>
    </div>
      
  );
};

export default TestimonialDiv;
