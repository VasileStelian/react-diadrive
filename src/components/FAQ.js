import React, { useState } from "react";

const FAQ = () => {
    const faqItems = [
        {
          question: 'Cat timp dureaza scolarizarea?',
          answer: 'Scolarizarea dureaza circa 30 de zile.',
        },
        {
          question: 'Cate puncte trebuie sa fac pentru a trece proba teoretica?',
          answer: 'Minimum 22 de puncte.',
        },
        {
          question: 'Daca am picat, in cate zile pot reincerca examenul?',
          answer: 'Minimum 15 zile calendaristice.',
        },
        {
          question: 'Ce presupune examenul pentru obtinerea permisului pentru categoria B?',
          answer:
            'Examenul pentru obtinerea permisului de conducere se da cu Politia si consta intr-o proba teoretica si o proba practica. Proba teoretica consta in rezolvarea unui chestionar care contine 26 intrebari, timpul alocat rezolvarii este de 30 de minute, proba teoretica se promoveaza obtinand minim 22 puncte. Proba practica se sustine de catre cei ce au promovat proba teoretica de sala, proba practica consta in conducerea autoturismului pe traseu, impreuna cu un agent de la Politie.',
        },
        {
          question: 'Care sunt tarifele?',
          answer:
            'Categoria B - 2000 RON \nCategoria BE - 1500 RON\nCategoria C - 2000 RON\nCategoria CE - 2500 RON\nCateogira D - 2000 RON\nFisa medicala - 200 RON',
        },
      ];
    
      const [activeIndex, setActiveIndex] = useState(null);
    
      const toggleAnswer = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
      };
    return(
        <div className="flex-col flex items-center">
            <div className="mb-4 items-center text-center">
            <h1 className="font-bold border-b-2  text-3xl border-black pb-1">Intrebari frecvente scoala auto DiaDrive</h1>
        <h2 className="text-lg">Raspunsuri la cele mai frecvente intrebari pe care le primim de la cursantii nostri.</h2>
        {/* FAQ ITEMS */}
        <div class="lg:min-w-900 max-w-2xl text-left mx-auto p-5 ">
        <div className="w-full text-left mx-auto p-5 cursor-pointer">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <div
                className={` flex-row bg-gradient-to-b from-gray-600 p-4 transition ease-linear duration-500 hover:bg-black hover:text-white hover:shadow-md hover:shadow-slate-700 shadow-xl rounded-md ${
                  activeIndex === index ? 'bg-black text-white' : ''
                }`}
                onClick={() => toggleAnswer(index)}
              >
                {item.question}
            
              {activeIndex === index && <div className="text-justify duration-300 trasition ease-linear p-2 bg-gradient-to-t from-gray-600 rounded-md" style={{ whiteSpace: 'pre-line' }}>{item.answer}</div>}
                </div>
            </div>
          ))}
        </div>

    </div>
        </div>
        </div>
    );
};


export default FAQ;