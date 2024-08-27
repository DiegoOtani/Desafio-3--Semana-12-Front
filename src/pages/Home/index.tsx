import { Tour } from "../../interfaces/Tour";
import TypesSection from "./sections/TypesSection";
import SearchSection from "./sections/SearchSection";
import InfoSection from "./sections/InfoSection";
import GuideSections from "./sections/GuideSections";
import TestimonialsSection from "./sections/TestimonialsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ToursSection from "./sections/ToursSection";
import DestinationsSection from "./sections/DestinationsSection";
import { useState, useEffect } from "react";
import { TypesReceived } from "../../interfaces/Types";
import TypesService from "../../services/api/typesService";

const toursData: Tour[] = [
  {
    imgUrl: 'https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg',
    locale: 'Budapest, Hungary',
    title: 'Wonders of the West Coast & Kimberly',
    stars: 4.5,
    reviews: 120,
    days: 3,
    minPrice: 299,
  },
  {
    imgUrl: 'https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg',
    locale: 'Rome, Italy',
    title: 'Rome Historical Tour',
    stars: 4.8,
    reviews: 210,
    days: 5,
    minPrice: 399,
  },
  {
    imgUrl: 'https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg',
    locale: 'Paris, France',
    title: 'Paris City Tour',
    stars: 4.5,
    reviews: 120,
    days: 3,
    minPrice: 299,
  },
  {
    imgUrl: 'https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg',
    locale: 'Rome, Italy',
    title: 'Rome Historical Tour',
    stars: 4.8,
    reviews: 210,
    days: 5,
    minPrice: 399,
  },
  {
    imgUrl: 'https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg',
    locale: 'Paris, France',
    title: 'Paris City Tour',
    stars: 4.5,
    reviews: 120,
    days: 3,
    minPrice: 299,
  },
  {
    imgUrl: 'https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg',
    locale: 'Rome, Italy',
    title: 'Rome Historical Tour',
    stars: 4.8,
    reviews: 210,
    days: 5,
    minPrice: 399,
  },
  {
    imgUrl: 'https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg',
    locale: 'Paris, France',
    title: 'Paris City Tour',
    stars: 4.5,
    reviews: 120,
    days: 3,
    minPrice: 299,
  },
  {
    imgUrl: 'https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg',
    locale: 'Rome, Italy',
    title: 'Rome Historical Tour',
    stars: 4.8,
    reviews: 210,
    days: 5,
    minPrice: 399,
  },
];

const Home = () => {
  const [types, setTypes] = useState<TypesReceived[]>([]);

  useEffect(() => {
    const loadTypes = async() => {
      try {
        const data = await TypesService.getTypes();
        setTypes(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadTypes();
  }, []);

  useEffect(() => {
    console.log(types);
  }, [types]);

  return <main className="w-full flex flex-col items-center gap-32">
    <SearchSection options={types.map(type => type.type_name)} />
    <ToursSection toursData={toursData}/>
    <InfoSection />
    <DestinationsSection />
    <ExperienceSection />
    <TypesSection />
    <TestimonialsSection />
    <GuideSections />
  </main>
};

export default Home;