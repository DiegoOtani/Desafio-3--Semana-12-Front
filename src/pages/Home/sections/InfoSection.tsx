import Info from "../components/Info";

const InfoSection = () => {
  return <section className="flex w-[80%] justify-between border-t pt-20">
    <Info quantity="120" info="Total Destination"/>
    <Info quantity="500" info="Travel Packages"/>
    <Info quantity="12k" info="Total Travelers"/>
    <Info quantity="7k" info="Positive Reviews"/>
  </section>
}

export default InfoSection;