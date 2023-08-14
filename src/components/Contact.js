import React, { useRef } from "react";
import placeholder from '../assets/images/placeholderuser.png'
import FAQ from "./FAQ";
import emailjs from "@emailjs/browser";






const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


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
      <form onSubmit={handleSumbit} className="w-full">
    <label className="text-left">Nume si Prenume</label>
    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full mt-1 h-7 resize-none text-black indent-1 rounded-md"></input>

    <label>E-mail</label>
    <input type="text" name="email" value={formData.email} onChange={handleChange} className="w-full mt-1 h-7 resize-none text-black indent-1 rounded-md"></input>


    <label>Mesaj</label>
    <input type="text" name="message" value={formData.message} onChange={handleChange} className="w-full mt-1 resize-none h-40 text-black indent-1 rounded-md"></input>

    <button type="submit" className="flex mb-8 bg-gradient-to-b from-gray-600 p-4 transition ease-linear duration-500 hover:bg-black hover:text-white hover:shadow-md hover:shadow-slate-700 shadow-slate-500 shadow-xl rounded-md">Trimite</button>
  </form>
      </div>
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