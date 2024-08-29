import { LiaVideoSolid } from "react-icons/lia";
import { FiImage } from "react-icons/fi";
import { ImageSectionProps } from "./types";

const ImageSection = ({ imgUrl }: ImageSectionProps) => {
  return<section className="relative text-secondary font-semibold text-h6 font-body">
    <img className="w-full h-auto" src={imgUrl} alt="" />
    <button className="flex items-center gap-2 bg-surface rounded-lg absolute bottom-4 right-[13%] px-3 py-1 hover:text-brand_2">
      Video
      <LiaVideoSolid /></button>
    <button className="flex items-center gap-2 bg-surface rounded-lg absolute bottom-4 right-[10px] px-3 py-1 hover:text-brand_2">
      Gallery
      <FiImage />
    </button>
  </section>  
}

export default ImageSection;