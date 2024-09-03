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
        src="https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/travelers.jpg?alt=media&token=493c3e0b-fe2d-47df-93f9-f0f12c4ea05d" 
        alt="tourist couple in a landscape on top of a cliff" 
      />
      <img 
        className="rotate-[-10deg] h-[250px] w-auto z-10 border-4 border-white"
        src="https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/close-up-couple-traveling.jpg?alt=media&token=21330eaa-7778-45ae-9e64-39b04528a550" 
        alt="tourist couple traveling on a city" 
      />
      <img 
        className="rotate-[10deg] h-[150px] w-auto z-20 border-4 border-white"
        src="https://firebasestorage.googleapis.com/v0/b/trisog-travels.appspot.com/o/travelers-3.jpg?alt=media&token=740c02da-0847-4765-ba48-b186dc29fb0c" 
        alt="tourist couple traveling on a trail" 
      />
    </div>
    <Slider perPage={1} renderItem={Testimonials} items={TestimonialsData} />
  </section>
}

export default TestimonialSection;