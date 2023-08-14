import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import seria1 from '../assets/images/seria1-min.png';
import b1 from '../assets/images/16ani-min.png';
import kia from '../assets/images/kia-min.png';
import fiesta from '../assets/images/fiesta-min.png';
import golf from '../assets/images/golf-min.png';
import be from '../assets/images/categbe-min.png';
import mercedes from '../assets/images/mercedes-min.png';
import autobuz from "../assets/images/autobuz-min.png";
import golf7 from '../assets/images/golf7-min.png';
import x1 from "../assets/images/x1-min.png";
import placeholder from "../assets/images/placeholderuser.png";

const generateSliderContent = (images) => {
  return images.map((item) => (
    <div key={item.id} className="p-4">
    <div className="rounded-md shadow-lg p-6 h-full flex flex-col justify-between">
      <div>
      <img
            src={item.src}
            alt={item.alt}
            className="rounded-md mb-4 mx-auto w-48 h-48 object-cover"
          />

        <h2 className="text-center text-xl font-semibold mb-2">{item.title}</h2>
        <p className="text-center text-sm">Categoria {item.category}</p>
        <p className="text-center text-sm">{item.description}</p>
      </div>
    </div>
  </div>
  ));
};

const Gallery = () => {
  const ImagesCars = [
    {
      id: 1,
      src: seria1,
      alt: "Image 1",
      title: "BMW 120d Sport-line",
      category: "B",
      description:
        "Combină performanța dinamică cu rafinamentul, fiind ideal pentru lecții de conducere la nivel avansat, oferind o experiență de conducere sportivă și confortabilă.",
    },
    {
      id: 2,
      src: kia,
      alt: "Image 2 ",
      title: "Kia Carens",
      category: "B special",
      description:
        "Adaptat pentru persoane cu dizabilități, oferă spațiu generos și caracteristici ergonomice, fiind ideal pentru lecții de conducere pentru cursanți cu nevoi speciale.",
    },
    {
      id: 3,
      src: be,
      alt: "Image 3",
      title: "Mercedes-Benz Vito + remorca",
      category: "BE",
      description: 
        "Reprezintă alegerea potrivită pentru lecții de tracțiune și manevrare cu remorcă, oferind putere și versatilitate în învățarea conducerii combinate.",
    },
    {
      id: 4,
      src: b1,
      alt: "Image 4",
      title: "Chatnet Barooder",
      category: "B1",
      description:
        "Este o opțiune excelentă pentru lecții de conducere urbană și abilități de bază, datorită dimensiunilor sale compacte și ușor de manevrat.",
    },
    {
      id: 5,
      src: fiesta,
      alt: "Image 5",
      title: "Ford Fiesta",
      category: "B",
      description:
        "Ford Fiesta este un hatchback agil și economic, perfect pentru lecții practice în oraș, oferind manevrabilitate ușoară și caracteristici moderne pentru cursanți.",
    },
    {
      id: 6,
      src: golf,
      alt: "Image 6",
      title: "Golf 4",
      category: "B special",
      description:
        "Adaptat pentru persoane cu dizabilități oferă accesibilitate și comoditate pentru lecții de conducere adaptate, asigurând o învățare eficientă și sigură.",
    },
    {
      id: 7,
      src: mercedes,
      alt: "Image 7",
      title: "Mercedes Atego",
      category: "C",
      description:
        "Mercedes Atego este un camion versatil și fiabil, ideal pentru școala de șoferi datorită dimensiunilor sale manevrabile și a dotărilor tehnologice avansate. Cu un design ergonomic și performanțe solide, Atego oferă o experiență de învățare confortabilă și sigură pentru viitorii șoferi.",
    },
    {
      id: 8,
      src: autobuz,
      alt: "Image 8",
      title: "Mercedes Conecto",
      category: "D",
      description:
        "Permite simularea conducerii în condiții de transport public, oferind spațiu pentru mai mulți cursanți și oportunitatea de a învăța abilități specifice conducerii de autobuz.",
    },
    {
      id: 9,
      src: "https://i.pinimg.com/564x/2e/40/02/2e40027b9b156589cfbccbf7b33d3bc7.jpg",
      alt: "Image 9",
      title: "Audi A3 S-line",
      category: "B",
      description:
        "Audi A3 Sedan oferă eleganță și tehnologie de vârf, fiind potrivit pentru lecții de conducere premium, cu atenție asupra detaliilor și performanțe sigure.",
    },
    {
      id: 10,
      src: golf7,
      alt: "Image 10",
      title: "Golf 7",
      category: "B",
      description: 
      "Volkswagen Golf 7 este o alegere ideală în cadrul școlii de șoferi, oferind un echilibru perfect între confort, siguranță și manevrabilitate, facilitând învățarea practică a conducătorilor auto într-un mediu modern și tehnologic avansat.",
    },
    {
      id: 11,
      src: x1,
      alt: "Image 11",
      title: "BMW X1",
      category: "B",
      description:
      "BMW X1 automat aduce un amestec rafinat de performanță și lux în cadrul școlii de șoferi, permițând cursanților să se familiarizeze cu tehnologia avansată și confortul în timp ce învață arta conducției într-un SUV compact și elegant."
    }

  ];
  
  const ImagesTeam = [
    {
      id: 1,
      src: placeholder,
      alt: "Image 1",
      title: "Sofron Diana",
      category: "B BE C CE D DE",
    },
    {
      id: 2,
      src: placeholder,
      alt: "Image 1",
      title: "Sofron Vasile-Liviu",
      category: "B BE C CE D DE ",
    },
    {
      id: 3,
      src: placeholder,
      alt: "Image 1",
      title: "Catalin Cojoc",
      category: "B BE C CE D DE",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl border-b-2 border-black pb-6">Masinile Noastre</h1>
      <div className="mx-auto w-5/6">
        <Slider {...settings}>
          {generateSliderContent(ImagesCars)}
        </Slider>
      </div>
      <h1 className="text-2xl border-b-2 border-black pt-10 pb-6">Echipa Noastră</h1>
      <div className="mx-auto w-5/6">
        <Slider {...settings}>
          {generateSliderContent(ImagesTeam)}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
