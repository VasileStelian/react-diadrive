import React from 'react';
import logo from '../assets/images/logo-diadrive.png'
import { Link } from 'react-router-dom'




const Navbar = () => {
  return ( 
    <nav class="mb-6">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
  
        <button type="button" onClick={smMenu} class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 duration-500 hover:bg-gray-700 hover:text-white focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Deschide Menu</span>
        
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0">
          <img class="h-8 w-auto" src={logo} alt="Your Company"/>
        </div>
        <div class="hidden sm:flex sm:space-x-4 sm:ml-auto ">
          <div class="flex space-x-4">
      
            <Link to="/" class="mr-4 transition ease-linear duration-500 hover:bg-gray-400 hover:shadow-xl hover:shadow-slate-700 hover:text-white rounded-3xl px-4 py-2">Acasa</Link>
            <Link to="/despre" class="mr-4 transition ease-linear duration-500 hover:bg-gray-400 hover:shadow-xl hover:shadow-slate-700 hover:text-white rounded-3xl px-4 py-2">Despre Noi</Link>
            <Link to="/contact" class="mr-4 transition ease-linear duration-500 hover:bg-gray-400 hover:shadow-xl hover:shadow-slate-700 hover:text-white rounded-3xl px-4 py-2">Contact</Link>
            
          </div>
        </div>
      </div>
     
    </div>
  </div>


  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">

      <Link to="" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Acasa</Link>
      <Link to="/despre" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Despre Noi</Link>
      <Link to="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</Link>
      
    </div>
  </div>
</nav>
  );
};

function smMenu() {
  var x = document.getElementById("mobile-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

export default Navbar;
