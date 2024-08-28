import NavSection from "../../components/NavSection";
import Filters from "./Components/Filters";

const Tour = () => {
  return <>
    <NavSection previousPages={[{name: 'Home', to: '/'}]} actualPage="Tour Package"/>
    <main className="bg-white flex flex-col gap-32 p-20">
      <Filters />
    </main>
  </>
};

export default Tour;