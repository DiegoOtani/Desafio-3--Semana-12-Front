import { DestinationProps } from "./types.";

const Destinations = ({ backgroundImage, travelers, country, width, height }: DestinationProps) => {
  return <a 
    href="#"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 100%), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: `${width}%`
    }}
    className={`${height === 'full' ? 'h-full' : 'h-[48%]'}
      bg-center flex flex-col justify-end text-white p-6
    `}
  >
    <span className="font-body text-subtitle">
      {travelers} Travelers
    </span>
    <h2 className="text-h5 font-italic">
      {country}
    </h2>
  </a>
};

export default Destinations;