import React from 'react';
import logo from '../assets/images/logo-diadrive.png'



const Header = () => {
    return (
<div className="flex flex-wrap items-center justify-around pb-6 ">
  
  {/* First Column */}
  <div className="flex flex-col items-center max-w-md mb-11 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 sm:px-2 ">
    <h1 className="text-5xl sm:text-5xl md:text-6xl mb-6">Dezvoltă-ți potențialul în spatele volanului.</h1>
    <p className="text-justify text-lg">
      "Succesul nu este întotdeauna despre măreție, ci despre consistență."<br/><br/>
      Cu sprijinul instructorilor noștri profesioniști,
      vei ajunge să conduci mașina singur într-un mod încrezător și priceput.
    </p>
  </div>

  {/* Second Column */}
  <div className="flex flex-col items-center max-w-md">
    <img
      src={logo}
      alt="Logo"
      className="w-72 h-auto"
    />
    <div className="flex flex-col items-center mt-14">
      
      <div className="mt-6 text-center">
        <h2 className="font-bold border-b-2 border-black pb-1">Categorii</h2>
        <p>B1 B BE C CE D DE</p>
        <h3 className="font-bold border-b-2 border-black pb-1">Orar</h3>
        <p>09:00 - 18:00 Luni - Vineri<br/>
          09:00 - 14:00 Sâmbătă</p>
      </div> 
    </div>
  </div>
  
</div>


    );
};
export default Header;