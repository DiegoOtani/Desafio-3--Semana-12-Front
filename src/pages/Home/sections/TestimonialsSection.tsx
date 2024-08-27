import Slider from "../../../components/Slider"
import { TestimonialProps } from "../components/Testimonials/types"
import Testimonials from "../components/Testimonials"

const TestimonialsData: TestimonialProps[] = [
  {
    testimonial: '"The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app."',
    by:'By Molie Rosa, Photographer'
  }, {
    testimonial: '"The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app."',
    by:'By Molie Rosa, Photographer'
  },
  {
    testimonial: '"The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app."',
    by:'By Molie Rosa, Photographer'
  },
  {
    testimonial: '"The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app."',
    by:'By Molie Rosa, Photographer'
  }
]

const TestimonialSection = () => {
  return <section className="flex w-[100%] items-center justify-center bg-surface p-32">
    <div className="w-[70%] flex flex-col items-center">
      <img 
        className="rotate-[10deg] h-[150px] w-auto z-20 border-4 border-white"
        src="/close-up-couple-traveling.jpg" 
        alt="" 
      />
      <img 
        className="rotate-[-10deg] h-[250px] w-auto z-10 border-4 border-white"
        src="/close-up-couple-traveling.jpg" 
        alt="" 
      />
      <img 
        className="rotate-[10deg] h-[150px] w-auto z-20 border-4 border-white"
        src="/close-up-couple-traveling.jpg" 
        alt="" 
      />
    </div>
    <Slider perPage={1} renderItem={Testimonials} items={TestimonialsData} />
  </section>
}

export default TestimonialSection;