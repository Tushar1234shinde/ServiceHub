import Slider from "react-slick";
import { ArrowRight, BadgeCheck, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

function Arrow({ className, onClick, children }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

function VendorCard({ vendor }) {
  const vendorImage = vendor.logoImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(vendor.name)}&background=0891b2&color=fff&size=140`;
  const categoryLabel = vendor.topCategories?.length ? vendor.topCategories.join(" • ") : vendor.bio || "Explore this vendor profile";

  return (
    <article className="vendor-slide-card">
      <div className="vendor-avatar-wrap">
        <img src={vendorImage} alt={vendor.name} className="vendor-photo" />
      </div>
      <h3 className="vendor-name-row">
        <span>{vendor.name}</span>
        {vendor.verified && <BadgeCheck size={16} className="verified-badge-inline" aria-label="Verified vendor" />}
      </h3>
      <p>{categoryLabel}</p>
      {vendor.verified && (
        <span className="verified-chip"><BadgeCheck size={14} /> Verified vendor</span>
      )}
      <div className="vendor-meta">
        <span><Star size={14} /> {Number(vendor.rating || 0).toFixed(1)}</span>
        <span>{vendor.reviewCount} reviews</span>
        <span>{vendor.completedOrders} completed</span>
      </div>
      <Link className="ghost-button vendor-cta" to={`/vendors/${vendor.vendorId}`}>
        View Profile
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}

export default function VendorCarousel({ vendors = [] }) {
  const settings = {
    dots: true,
    infinite: vendors.length > 3,
    speed: 500,
    slidesToShow: Math.min(3, Math.max(1, vendors.length)),
    slidesToScroll: 1,
    autoplay: vendors.length > 3,
    autoplaySpeed: 3200,
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
        <p>Ranked from real ratings, review volume, completed jobs, and active marketplace listings.</p>
      </div>
      {vendors.length === 0 ? (
        <p className="subtle">Vendors will appear here once listings, reviews, and completed jobs are available.</p>
      ) : (
        <Slider {...settings}>
          {vendors.map((vendor) => (
            <div key={vendor.vendorId} className="vendor-slide-wrap">
              <VendorCard vendor={vendor} />
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
}
