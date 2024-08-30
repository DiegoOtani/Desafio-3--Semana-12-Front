import Titles from "../../../components/Titles";
import Included from "../components/Included";
import { FiPlayCircle } from "react-icons/fi";

const ExperienceSection = () => {
  return <section className="w-full flex min-h-[400px] justify-center py-20">
    <div className="flex w-[50%] items-end relative">
      <img className="border-4 border-white w-[50%] h-[70%] rotate-[-15deg] z-10 absolute top-5 left-0"
        src="/images.jpg" alt="" 
      />
      <img className="border-4 border-white w-[50%] h-[90%] z-20 absolute right-40"
        src="/images.jpg" alt="" 
      />
      <button className={`bg-brand_2 flex items-center font-normal gap-2 font-italic text-white text-h5 pl-10 pr-28 border border-white py-6 z-30
          absolute right-60 bottom-10 hover:bg-red-600
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