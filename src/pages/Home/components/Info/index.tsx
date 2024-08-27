import { InfoProps } from "./types";

const Info = ({quantity, info}: InfoProps) => {
  return <div className="text-secondary flex items-center gap-4">
    <span className="text-h3 font-italic font-bold">
      {quantity}+
    </span>
    <span className="text-bodyColor font-bold text-h6">
      {info}
    </span>
  </div>
}

export default Info;