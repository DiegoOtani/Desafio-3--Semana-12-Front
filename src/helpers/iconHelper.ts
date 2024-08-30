import { IconType } from 'react-icons';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { PiSailboatLight, PiCityThin, PiBowlFood, PiCampfire } from "react-icons/pi";
import { GiHiking } from "react-icons/gi";
import { MdCardTravel } from 'react-icons/md';

const typeIcons: Record<string, IconType> = {
  Adventure: MdCardTravel,
  Beaches: FaUmbrellaBeach,
  "Boat Tours": PiSailboatLight,
  "City Tours": PiCityThin,
  Food: PiBowlFood,
  Hiking: GiHiking,
  Camping: PiCampfire
};

const getIconsForType = (typeName: string): IconType => {
  return typeIcons[typeName];
};

export default getIconsForType;