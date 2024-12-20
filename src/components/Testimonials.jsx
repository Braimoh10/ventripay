import { testimonials } from "../data"
import { TestimonialCard } from "./TestimonialCard"

const Testimonials = () => {
  return (
    <section className="px-8 py-8 sm:px-40 ">
        <div className="max-container w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-md md:text-2xl font-bold uppercase mb-5">testimonials</h1>
                <p className="text-sm uppercase mb-5">get to know our clients</p>
            </div>
            <div className=" grid grid-cols lg:grid-cols-3 gap-8 mb-5">
                {
                    testimonials.map((testimonial)=>(
                        <TestimonialCard key={testimonial.quote} {...testimonial}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
export default Testimonials