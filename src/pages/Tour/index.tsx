import NavSection from "../../components/NavSection";

const Tour = () => {
  return <main>
    <NavSection previousPages={[{name: 'Home', to: '/'}]} actualPage="Tour Package"/>
  </main>
};

export default Tour;