import GuideCard from "../../../components/GuideCard";
import Titles from "../../../components/Titles"

const GuideSections = () => {
  return <section className="w-full flex flex-col items-center gap-10 px-32 pb-32">
    <Titles colorTitle="black" size="medium" subtitle="Updates" title="Latest Travel Guide" />
    <div className="grid grid-cols-2 gap-10">
      <GuideCard 
        date="July 13, 2023" 
        title="The Impact of Covid-19 on travel & tourism industry" 
        type="Admin" 
        alt="peoples togheter planning" 
        imgUrl="https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/tourists.jpg?alt=media&token=32b92265-c4b7-4062-b80d-ee408e4e41d9"
      />
      <GuideCard 
        date="July 13, 2023" 
        title="The Impact of Covid-19 on travel & tourism industry" 
        type="Admin" 
        alt="peoples togheter planning" 
        imgUrl="https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/woman-taking-photo-camera-while-her-friends-looking-map.jpg?alt=media&token=a1daacec-9e67-4998-80f3-eeaed50d74b4"
      />
      <GuideCard 
        date="July 13, 2023" 
        title="The Impact of Covid-19 on travel & tourism industry" 
        type="Admin" 
        alt="peoples togheter planning" 
        imgUrl="https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/peoples-planning.png?alt=media&token=7ae54dce-5664-48d4-ab54-1e201ffc5e77"
      />
      <GuideCard 
        date="July 13, 2023" 
        title="The Impact of Covid-19 on travel & tourism industry" 
        type="Admin" 
        alt="peoples togheter planning" 
        imgUrl="https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/toursits-2.jpg?alt=media&token=177d55db-0695-4a82-bfc4-93e2d97f5a33"
      />
    </div>
  </section>
}

export default GuideSections;