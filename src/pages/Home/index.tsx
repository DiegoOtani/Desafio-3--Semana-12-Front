import Slider from "../../components/Slider";
import { Tour } from "../../interfaces/Tour";
import TourCard from "../../components/TourCard";

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
  <section className="flex w-full p-20 ">
    <Slider items={toursData} perPage={4} renderItem={TourCard}/> 
  </section>
  </main>
};

export default Home;