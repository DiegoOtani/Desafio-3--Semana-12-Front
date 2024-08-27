import Titles from "../../../../components/Titles"
import { TestimonialProps } from "./types"

const Testimonials = ({ testimonial, by }: TestimonialProps) => {
  return <div className="flex flex-col items-center gap-4">
    <Titles colorTitle="black" size="medium" subtitle="Testimonials" title="What Travelers Say"/>
    <span className="text-big font-title text-brand_2">,,</span>
    <p className="text-secondary font-extrabold text-h5 font-body text-center w-[75%]">
      {testimonial}
    </p>
    <p className="text-secondary-40 font-body text-h5 font-bold">-{by}</p>
  </div>
}

export default Testimonials