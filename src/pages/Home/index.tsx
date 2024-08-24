import TourSlider from "../../components/TourSlider";
import { Tour } from "../../interfaces/Tour";

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
  // ...adicione mais tours conforme necessário
];

const Home = () => {
  return <main className="flex flex-col items-center">
  <section className="flex w-full p-20 ">
    <TourSlider tours={toursData}/> 
  </section>
  </main>
};

export default Home;