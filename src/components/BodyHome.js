import React from "react";

import Testimonials from '../components/Testimonials'
import JourneyDiv from './JourneyDiv';



const BodyHome = () => {
   
  return (
    <div className="flex-col mt-20 mb-20 flex items-center justify-center">
    <div className="pb-4 max-w-md mb-11 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 sm:px-2 flex justify-center items-center">
    <div className="text-center">
    <h1 className="text-black text-3xl font-bold ">Pasii de urmat pentru obtinerea carnetului de conducere</h1>
    <h2 className="text-gray-700 text-lg border-black border-b-2 pb-1">Urmeaza pasii pe care scoala de soferi Dia Drive iti recomanda pentru obtinerea carnetului de soferi pentru categoria B</h2>
  </div>
</div>
  
<div className="flex flex-wrap justify-evenly mt-6 cursor-default">

    <JourneyDiv
      title="Pasul I"
      content="Vino la sediul nostru sau suna la 0746594104."
      showRightIcon={true}
      />

  <JourneyDiv
      title="Pasul II"
      content="Pregateste actele necesare pentru inscriere(buletin, permis dupa caz, cazier)."
      showRightIcon={true}
      />
    
    <JourneyDiv
      title="Pasul III"
      content="Efectueaza orele de pregatire practica si teoretica."
      showRightIcon={true}
      />
    
  </div>

  <div className="flex flex-wrap justify-evenly mt-6 cursor-default">
  <JourneyDiv
      title="Pasul V"
      content="Revendica permisul auto."
      showRightIcon={false}
      />
    
    <JourneyDiv
      title="Pasul IV"
      content="Sustine examenul teoretic si practic."
      showRightIcon={false}
      />
      
  </div>
  <Testimonials></Testimonials>
</div>

    );
};

export default BodyHome;