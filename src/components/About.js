import React from "react";
import Gallery from "./Gallery";
import backgroundImage from '../assets/images/Sediu-min.png'


const About = () => {
    return (
        <div>
            <h1 className="text-center text-3xl border-b-2 pb-6 border-black ">Despre Noi</h1>
            <div className="flex justify-between my-6 bg-no-repeat rounded-md p-10" 
            style={{ backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"}}
                    >
                        <div></div>
                <div className="cursor-default p-4 max-w-lg bg-gradient-to-b from-gray-600 transition duration-500 hover:bg-black hover:text-white hover:shadow-md hover:shadow-slate-700 shadow-xl rounded-md bg-white">
                    <p className="text-justify">Școala de Șoferi Dia Drive este aici entru a ghida pașii tăi spre succesul în conducerea auto. Cu o experiență de învățare începând din 2007, ne-am angajat să formăm șoferi responsabili și încrezători. 
                        Instructorii noștri profesioniști te vor însoți pe parcursul acestui drum, oferindu-ți atât cunoștințe teoretice solide, 
                        cât și abilități practice de conducere. Indiferent dacă ești la început de drum sau dorești să îți 
                        îmbunătățești competențele, Dia Drive este partenerul tău de încredere în călătoria spre obținerea permisului de conducere.</p>
                </div>
                
            </div>
            <Gallery />
        </div>
    );
}

export default About;