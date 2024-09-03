import SearchBar from "../../../components/SearchBar"
import Titles from "../../../components/Titles"

type SearchSectionProps = {
  options: string[];
};

const SearchSection = ({ options }: SearchSectionProps) => {
  return <section className="bg-gray-300 w-full flex flex-col justify-center items-center bg-[url('https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/background-baloon.jpg?alt=media&token=3e4c40e2-123b-4e0a-a4cd-29d07760ebbd')] bg-cover bg-center h-screen relative max-h-[600px]">
    <div className="absolute inset-0 bg-black opacity-70"></div>
    <Titles title="Travel & Adventures" subtitle="Save 15% off in Worldwide" colorTitle="white" size="large"/>
    <h3 className="text-white font-body text-h6 font-bold z-10 pb-20">Find awesome hotel, tour, car and activities in London</h3>
    <SearchBar options={options}/>
  </section>
}

export default SearchSection;