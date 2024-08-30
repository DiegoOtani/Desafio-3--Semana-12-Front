import Titles from "../../../components/Titles";
import Destinations from "../components/Destinations";
import backgroundImage from '/woman-taking-photo-camera-while-her-friends-looking-map.jpg'
import countryImage from '/london-eye-e-uma-enorme.jpg'

const DestinationsSection = () => {
  return <section className="bg-surface flex flex-col items-center gap-10 w-full px-20 py-32">
    <Titles colorTitle="black" size="medium" subtitle="Destination" title="Top Attractions Destinations"/>
    <div className="w-full h-[500px] flex justify-center items-center">
      <div className="w-full max-w-[70%] h-full flex flex-wrap justify-center gap-4">
        <Destinations backgroundImage={countryImage} travelers="174,688" country="United Kingdom" width={30} height="medium"/>
        <Destinations backgroundImage={backgroundImage} travelers="174,688" country="Turkey" width={30} height="medium"/>
        <Destinations backgroundImage={backgroundImage} travelers="174,688" country="Turkey" width={30} height="medium"/>
        <Destinations backgroundImage={backgroundImage} travelers="174,688" country="Turkey" width={45} height="medium"/>
        <Destinations backgroundImage={backgroundImage} travelers="174,688" country="Turkey" width={45} height="medium"/>
      </div>
      <Destinations backgroundImage={backgroundImage} travelers="174,688" country="Turkey" width={20} height="full"/>
    </div>
  </section>
}

export default DestinationsSection;