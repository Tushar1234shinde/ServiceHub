import Slider from "react-slick";
import { ArrowRight, BadgeCheck, ChevronLeft, ChevronRight, Star } from "lucide-react";

function Arrow({ className, onClick, children }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

function VendorCard({ vendor }) {
  return (
    <article className="vendor-slide-card">
      <div className="vendor-avatar-wrap">
        <img src={vendor.image} alt={vendor.name} className="vendor-photo" />
      </div>
      <h3 className="vendor-name-row">
        <span>{vendor.name}</span>
        {vendor.verified && <BadgeCheck size={16} className="verified-badge-inline" aria-label="Verified vendor" />}
      </h3>
      <p>{vendor.serviceType}</p>
      {vendor.verified && (
        <span className="verified-chip"><BadgeCheck size={14} /> Verified vendor</span>
      )}
      <div className="vendor-meta">
        <span><Star size={14} /> {vendor.rating}</span>
        <span>{vendor.reviews} reviews</span>
      </div>
      <button className="ghost-button vendor-cta">
        View Profile
        <ArrowRight size={16} />
      </button>
    </article>
  );
}

export default function VendorCarousel({ vendors }) {
  const settings = {
    dots: true,
    infinite: vendors.length > 3,
    speed: 500,
    slidesToShow: Math.min(3, Math.max(1, vendors.length)),
    slidesToScroll: 1,
    autoplay: vendors.length > 3,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <Arrow><ChevronLeft size={18} /></Arrow>,
    nextArrow: <Arrow><ChevronRight size={18} /></Arrow>,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: Math.min(2, Math.max(1, vendors.length)) } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="page section-block" id="vendors">
      <div className="section-headline">
        <h2>Top 5 Vendors</h2>
        <p>Highly rated vendors across painting, POP, window work, and renovation services.</p>
      </div>
      {vendors.length === 0 ? (
        <p className="subtle">Vendors will appear here once listings are published.</p>
      ) : (
        <Slider {...settings}>
          {vendors.map((vendor) => (
            <div key={vendor.id ?? vendor.name} className="vendor-slide-wrap">
              <VendorCard vendor={vendor} />
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
}
