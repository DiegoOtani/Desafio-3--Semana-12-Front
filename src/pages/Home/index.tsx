import Slider from "../../components/Slider";
import { Tour } from "../../interfaces/Tour";
import TourCard from "../../components/TourCard";
import TypesSection from "./sections/TypesSection";
import Titles from "../../components/Titles";
import SearchSection from "./sections/SearchSection";
import InfoSection from "./sections/InfoSection";
import GuideSections from "./sections/GuideSections";

const toursData: Tour[] = [
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
  return <main className="flex flex-col items-center">
    <SearchSection />
  <section className="flex flex-col w-full p-20 ">
    <Titles colorTitle="black" size="medium" subtitle="Tours" title="Most Popular Tours"/>
    <Slider items={toursData} perPage={4} renderItem={TourCard}/> 
  </section>
  <InfoSection />
  <TypesSection />
  <GuideSections />
  </main>
};

export default Home;