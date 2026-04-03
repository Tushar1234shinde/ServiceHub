import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

function Arrow({ className, onClick, children }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

const testimonials = [
  {
    id: 1,
    clientName: "Sarah Johnson",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=0891b2&color=fff&size=100",
    vendorName: "John Builders",
    review: "Excellent painting work and clear communication. Escrow workflow gave me full confidence during delivery.",
    rating: 5
  },
  {
    id: 2,
    clientName: "Michael Chen",
    avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=10b981&color=fff&size=100",
    vendorName: "Elite Interiors",
    review: "Great quality work and fair pricing. Milestones and payment statuses were transparent throughout.",
    rating: 5
  },
  {
    id: 3,
    clientName: "Priya Sharma",
    avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=f97316&color=fff&size=100",
    vendorName: "Modern Windows Co.",
    review: "Fast turnaround and professional finish. I was able to review delivery before approving payment.",
    rating: 4
  }
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: testimonials.length > 2,
    speed: 500,
    slidesToShow: Math.min(2, Math.max(1, testimonials.length)),
    slidesToScroll: 1,
    autoplay: testimonials.length > 2,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <Arrow><ChevronLeft size={18} /></Arrow>,
    nextArrow: <Arrow><ChevronRight size={18} /></Arrow>,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }]
  };

  return (
    <section className="section-strip" id="testimonials">
      <div className="page section-block">
        <div className="section-headline">
          <h2>Reviews & Testimonials</h2>
          <p>Feedback from clients who booked verified professionals on the platform.</p>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-slide-wrap">
              <article className="testimonial-card">
                <Quote size={20} className="quote-mark" />
                <p>{testimonial.review}</p>
                <div className="testimonial-rating">{"*".repeat(testimonial.rating)} <Star size={14} /></div>
                <div className="testimonial-client">
                  <img src={testimonial.avatar} alt={testimonial.clientName} className="testimonial-avatar" />
                  <div>
                    <h4>{testimonial.clientName}</h4>
                    <span>Vendor: {testimonial.vendorName}</span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
