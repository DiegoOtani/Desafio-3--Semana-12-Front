import GuideCard from "../../../components/GuideCard";
import Titles from "../../../components/Titles"

const GuideSections = () => {
  return <section className="w-full flex flex-col items-center gap-10 p-32">
    <Titles colorTitle="black" size="medium" subtitle="Updates" title="Latest Travel Guide" />
    <div className="grid grid-cols-2 gap-10">
      <GuideCard 
        date="July 13, 2023" 
        title="The Impact of Covid-19 on travel & tourism industry" 
        type="Admin" 
        alt="peoples togheter planning" 
        imgUrl="../../../../public/peoples-planning.png"
      />
      <GuideCard 
        date="July 13, 2023" 
        title="The Impact of Covid-19 on travel & tourism industry" 
        type="Admin" 
        alt="peoples togheter planning" 
        imgUrl="../../../../public/peoples-planning.png"
      />
      <GuideCard 
        date="July 13, 2023" 
        title="The Impact of Covid-19 on travel & tourism industry" 
        type="Admin" 
        alt="peoples togheter planning" 
        imgUrl="../../../../public/peoples-planning.png"
      />
      <GuideCard 
        date="July 13, 2023" 
        title="The Impact of Covid-19 on travel & tourism industry" 
        type="Admin" 
        alt="peoples togheter planning" 
        imgUrl="../../../../public/peoples-planning.png"
      />
    </div>
  </section>
}

export default GuideSections;