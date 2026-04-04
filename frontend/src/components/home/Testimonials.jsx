import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";

function Arrow({ className, onClick, children }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

function avatarFor(testimonial) {
  if (testimonial.clientImage) {
    return testimonial.clientImage;
  }
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.clientName)}&background=0891b2&color=fff&size=100`;
}

export default function Testimonials({ testimonials = [] }) {
  const settings = {
    dots: true,
    infinite: testimonials.length > 2,
    speed: 500,
    slidesToShow: Math.min(2, Math.max(1, testimonials.length)),
    slidesToScroll: 1,
    autoplay: testimonials.length > 2,
    autoplaySpeed: 4200,
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
          <p>Feedback from real clients who completed orders on the platform.</p>
        </div>

        {testimonials.length === 0 ? (
          <p className="subtle">Client reviews will appear here after completed orders are rated.</p>
        ) : (
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide-wrap">
                <article className="testimonial-card">
                  <Quote size={20} className="quote-mark" />
                  <p>{testimonial.comment}</p>
                  <div className="testimonial-rating">{"?".repeat(testimonial.rating)} <Star size={14} /></div>
                  {testimonial.reply && (
                    <div className="review-reply-card">
                      <strong>Vendor reply</strong>
                      <p>{testimonial.reply.comment}</p>
                    </div>
                  )}
                  <div className="testimonial-client">
                    <img src={avatarFor(testimonial)} alt={testimonial.clientName} className="testimonial-avatar" />
                    <div>
                      <h4>{testimonial.clientName}</h4>
                      <span>Vendor: <Link to={`/vendors/${testimonial.vendorId}`}>{testimonial.vendorName}</Link></span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}
