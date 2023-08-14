import React from 'react';
import logo from '../assets/images/logo-diadrive-white.png'
import { MapIcon } from '@heroicons/react/outline';

const Footer = () => {
    return (
        <div className="bg-black p-5 text-gray-200 text-center">  
  <div className="flex justify-around flex-wrap">
    <div className="flex items-center justify-around max-w-sm m-auto max-sm:pb-5">
      <div className="basis-1/3 min-w-300 ">
        <a href='https://goo.gl/maps/2RjNxnobDo8ShL7L8' target="_blank" rel="noreferrer noopener"><MapIcon className='text-slate-400 w-16 items-center mx-auto sm:hidden' /></a>
      <iframe className="max-sm:hidden" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10966.552033269605!2d26.9094858!3d46.5943931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b56ff61bbd1c03%3A0x72b1e708e33e1fd5!2sDIADRIVE%20SRL!5e0!3m2!1sro!2sro!4v1690459890476!5m2!1sro!2sro" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <h1 className="text-gray-200 text-xl mt-4"><a href='https://goo.gl/maps/2RjNxnobDo8ShL7L8' target="_blank" rel="noreferrer noopener">Calea Moldovei NR. 112, Gheraiesti</a></h1>
      </div>
    </div>
    <div className="pb-6 flex items-center justify-around max-w-sm max-s m-auto">
      <div className="basis-1/3 min-w-300  ">
       <img src={logo} alt="Logo" className="w-72" />
      <p className="text-center mt-2">Evoluăm împreună - Din 2005 facem pietonul șofer!</p>
      </div>
    </div>
    <div className="pb-6 flex items-center justify-around max-w-sm m-auto">
      <div className="basis-1/3 min-w-300 ">
      <h1 className="text-gray-200 text-xl">Urmareste-ne</h1>
      <ul className="mt-5">
        <li><a className="hover:text-gray-500 duration-300" href="https://www.instagram.com/scoala_de_soferi_diadrive_bc/" target="_blank" rel="noreferrer noopener">Instagram</a></li>
        <li><a className="hover:text-gray-500 duration-300" href="https://www.facebook.com/diadrivebacau" target="_blank" rel="noreferrer noopener">Facebook</a></li>
      </ul>
      </div>
    </div>
  </div>
  <div>
  <hr className="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700" />
  <p>© {new Date().getFullYear()} | DiaDrive SRL Bacau</p>
  </div>
</div>
    );
};

export default Footer;