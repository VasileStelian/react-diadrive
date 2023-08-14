import React from "react";
import user1 from '../assets/images/user-1.png'
import user2 from '../assets/images/user-2.png'
import user3 from '../assets/images/user-3.png'
import TestimonialDiv from "./TestimonialDiv";

const Testimonials = () => {
    return (
<div className="pt-10">
  <div className="max-w-5xl m-auto pl-6 pr-6">
    <div className="text-center mb-12">
      <h1 className="font-bold border-b-2 text-3xl border-black pb-1">Testimoniale</h1>
    </div>
  </div>
  <div className="flex justify-around flex-wrap">
    <div className="pb-6 flex items-center justify-around max-w-sm m-auto">
    <TestimonialDiv
  name="Ana Maria Ceaun"
  content="Experiența mea la Dia Drive a fost excelentă. Instruirea de calitate m-a pregătit perfect pentru examenul de conducere."
  imageUrl={user1} // Replace user1 with the URL of the specific image you want to use
/>
    </div>
    <div className="pb-6 flex items-center justify-around max-w-sm m-auto">
    <TestimonialDiv
  name="Marcel Cuptor"
  content="Recomand cu încredere DiaDrive! Atmosferă prietenoasă, lecții personalizate și mașini moderne. Am trecut examenul din prima!"
  imageUrl={user2} // Replace user1 with the URL of the specific image you want to use
/>
    </div>
    <div className="pb-6 flex items-center justify-around max-w-sm m-auto">
    <TestimonialDiv
  name="Irina Notrimes"
  content="DiaDrive e cea mai bună alegere! Echipă dedicată, cursuri bine structurate și sprijin continuu. Mulțumită lor, sunt șofer independent!"
  imageUrl={user3} // Replace user1 with the URL of the specific image you want to use
/>
    </div>
  </div>
</div>
    );
};

export default Testimonials;