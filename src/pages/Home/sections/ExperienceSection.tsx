import Titles from "../../../components/Titles";
import Included from "../components/Included";
import { FiPlayCircle } from "react-icons/fi";

const ExperienceSection = () => {
  return <section className="w-full flex min-h-[400px] justify-center py-20">
    <div className="flex w-[50%] items-end relative">
      <img className="border-4 border-white w-[40%] h-[80%] rotate-[-15deg] z-10 absolute top-0 left-0"
        src="https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/images.jpg?alt=media&token=5a62ff1d-90d3-40f6-92b6-63f61fd64c78" 
        alt="landscape of a field of purple flowers" 
      />
      <img className="border-4 border-white w-[45%] h-[90%] z-20 absolute left-60"
        src="https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/timo-stern-iUBgeNeyVy8-unsplash.jpg?alt=media&token=919b53d7-b31c-4fb3-90d8-2710307dd881"
        alt="tourist traveling along a tourist street in a city" 
      />
      <button className={`bg-brand_2 flex items-center font-normal gap-2 font-italic text-white text-h5 pl-10 pr-28 border border-white py-6 z-30
          absolute left-[20%] bottom-6 hover:bg-red-600
        `}>
        <FiPlayCircle color="white" size={36}/>
        Watch Now
      </button>
    </div>
    <div className="flex flex-col gap-6 max-w-[425px]">
      <Titles 
        size="medium" 
        colorTitle="black" 
        subtitle="Why Choose Us" 
        title="Our Experiences Meet High Quality Standards"
        place="start"
      />
      <p className="text-secondary-40 font-bold font-body text-h6">
        Holisticy optimize proactive stategic theme areas rather than effective manufacturated products create.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Included include='Travel Plan'/>
        <Included include='Cheap Rates'/>
        <Included include='Hand-picked Tour'/>
        <Included include='Private Guide'/>
      </div>
      <button className={`border border-secondary-40 text-secondary-80 font-bold text-h6 rounded-lg py-4 px-8 w-[40%]
        hover:bg-brand_2 hover:text-white
      `}>
        Contact Us
      </button>
    </div>
  </section>
};

export default ExperienceSection;