import Titles from "../../../components/Titles";
import Destinations from "../components/Destinations";

const DestinationsSection = () => {
  return <section className="bg-surface flex flex-col items-center gap-10 w-full px-20 py-32">
    <Titles colorTitle="black" size="medium" subtitle="Destination" title="Top Attractions Destinations"/>
    <div className="w-full h-[500px] flex justify-center items-center">
      <div className="w-full max-w-[70%] h-full flex flex-wrap justify-center gap-4">
        <Destinations backgroundImage={'https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/bg.jpeg?alt=media&token=efb10064-49be-414c-95d2-a0d4c9ee6589'} 
          travelers="174,688" 
          country="United Kingdom" 
          width={30} 
          height="medium"
        />
        <Destinations 
          backgroundImage={'https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/bg.jpeg?alt=media&token=efb10064-49be-414c-95d2-a0d4c9ee6589'} 
          travelers="174,688" 
          country="Turkey" 
          width={30} 
          height="medium"
        />
        <Destinations 
          backgroundImage={'https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/bg.jpeg?alt=media&token=efb10064-49be-414c-95d2-a0d4c9ee6589'} 
          travelers="174,688" 
          country="Turkey" 
          width={30} 
          height="medium"
        />
        <Destinations 
        backgroundImage={'https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/australia.jpg?alt=media&token=5982bbf2-0ac5-4103-9efe-e8a4a1fdfeb3'} 
          travelers="174,688" 
          country="Turkey" 
          width={45} 
          height="medium"
        />
        <Destinations 
          backgroundImage={'https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/australia.jpg?alt=media&token=5982bbf2-0ac5-4103-9efe-e8a4a1fdfeb3'} 
          travelers="174,688" 
          country="Turkey" 
          width={45} 
          height="medium"
        />
      </div>
      <Destinations 
        backgroundImage={'https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/francesco-la-corte-LBKny-s6AXg-unsplash.jpg?alt=media&token=4f234689-811e-425f-a34a-8db4b88a1dbb'} 
        travelers="174,688" 
        country="Turkey" 
        width={20} 
        height="full"
      />
    </div>
  </section>
}

export default DestinationsSection;