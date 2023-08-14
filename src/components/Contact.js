import React from "react";
import placeholder from '../assets/images/placeholderuser.png'
import FAQ from "./FAQ";


const Contact = () => {
    return (
<div className="pt-10">
  <div className="max-w-5xl m-auto pl-6 pr-6">
    <div className="text-center mb-12">
      <h1 className="font-bold border-b-2  text-3xl border-black pb-1">Contacteaza-ne</h1>
    </div>
  </div>
  <div className="flex flex-row justify-around flex-wrap">
    <div className="pb-6 flex flex-col items-center justify-around max-w-sm m-auto">
      <div className="basis-1/3 min-w-300 mb-8 bg-gradient-to-b from-gray-600 p-4 transition ease-linear duration-500 hover:bg-black hover:text-white hover:shadow-md hover:shadow-slate-700 shadow-xl rounded-md">
      <form className="w-full">
    <label className="text-left">Nume si Prenume</label>
    <textarea className="w-full mt-1 h-7 resize-none text-black indent-1 rounded-md"></textarea>

    <label>E-mail</label>
    <textarea className="w-full mt-1 h-7 resize-none text-black indent-1 rounded-md"></textarea>

    <label>Telefon Mobil</label>
    <textarea className="w-full mt-1 h-7 resize-none text-black indent-1 rounded-md"></textarea>

    <label>Mesaj</label>
    <textarea className="w-full mt-1 resize-none h-40 text-black indent-1 rounded-md"></textarea>
  </form>
      </div>
      <button className="flex mb-8 bg-gradient-to-b from-gray-600 p-4 transition ease-linear duration-500 hover:bg-black hover:text-white hover:shadow-md hover:shadow-slate-700 shadow-slate-500 shadow-xl rounded-md">Trimite</button>
    </div>
    <div className="pb-6 items-center max-w-sm m-auto">
  <div className="mb-8 flex-row bg-gradient-to-b from-gray-600 p-4 transition ease-linear duration-500 hover:bg-black hover:text-white hover:shadow-md hover:shadow-slate-700 shadow-xl rounded-md">
  <h2 className="text-right mb-2 font-bold border-b-2 border-slate-600">Telefon Mobil</h2>
    <div className="flex flex-end justify-end items-center"> {/* Container for first pair */}
      <p>0746 594 104 - Diana</p>
      <img className="ml-2 rounded-lg h-12" src={placeholder} alt="img" /> {/* insert img of dad*/}
    </div>
    <div className="flex flex-end justify-end items-center mt-2"> {/* Container for second pair */}
      <p>0752 852 429 - Liviu</p>
      <img className="ml-2 rounded-lg h-12" src={placeholder} alt="img" /> {/* insert img of dad*/}
    </div>
    <h2 className="mt-4 text-right font-bold border-b-2 border-slate-600 mb-2">E-mail</h2>
    <p className="text-right">diadrive@yahoo.com</p>
  </div>
</div>
</div>
<div className="flex-col flex items-center justify-center">
   <FAQ/></div>
  </div>

    );
};

export default Contact;