import { GiCheckMark } from "react-icons/gi";

type IncludedProps = {
  include: string;
}

const Included = ({ include }: IncludedProps) => {
  return <p className="flex items-center gap-2">
    <GiCheckMark color="FC5056" size={20}/>
    <span className="text-secondary-80 font-extrabold text-h6">
      {include}
    </span>
  </p>
}

export default Included;