import { ProgressBarProps } from "./types";

const ProgressBar = ({ value }: ProgressBarProps) => {
  return <div className="w-full bg-secondary-10 rounded-full h-3">
    <div 
      className={`bg-brand_2 h-3 rounded-full`}
      style={{ width: `${(value / 5) * 100}%` }}
    ></div>
  </div>
};

export default ProgressBar;