import SearchBar from "../../../components/SearchBar"
import Titles from "../../../components/Titles"

const SearchSection = () => {
  return <section className="bg-gray-300 w-full flex flex-col items-center">
    <Titles title="Travel & Adventures" subtitle="Save 15% off in Worldwide" colorTitle="white" size="large"/>
    <h3 className="text-white font-title text-h6 font-normal">Find awesome hotel, tour, car and activities in London</h3>
    <SearchBar options={['Adventure', 'Family']}/>
  </section>
}

export default SearchSection;