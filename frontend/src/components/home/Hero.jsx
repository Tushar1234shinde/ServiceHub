import { Search, Sparkles, UserPlus } from "lucide-react";
import HeroScene from "./HeroScene";

export default function Hero({ servicesCount, vendorsCount, savedCount, onFindVendors, onBecomeVendor }) {
  return (
    <section className="market-hero" id="home">
      <div className="market-hero-overlay" />
      <div className="market-hero-content page">
        <div className="market-hero-inner">
          <div className="hero-copy">
            <div className="hero-chip-row">
              <span className="hero-live-chip">
                <Sparkles size={14} />
                Intelligent service matching
              </span>
            </div>
            <p className="hero-kicker">Service Marketplace</p>
            <h1>Find Trusted Professionals for Your Home & Office Work</h1>
            <p>
              Connect with verified vendors for painting, POP work, window making, plastering, renovations, and more.
              Quality work, reliable service, transparent pricing.
            </p>
            <div className="hero-actions">
              <button className="primary-button" onClick={onFindVendors}>
                <Search size={18} />
                Find Vendors
              </button>
              <button className="hero-white-button" onClick={onBecomeVendor}>
                <UserPlus size={18} />
                Become a Vendor
              </button>
            </div>
            <div className="hero-stats">
              <article>
                <strong>{servicesCount}</strong>
                <span>Published Services</span>
              </article>
              <article>
                <strong>{vendorsCount}</strong>
                <span>Active Vendors</span>
              </article>
              <article>
                <strong>{savedCount}</strong>
                <span>Saved by You</span>
              </article>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-noise" />
            <div className="hero-visual-grid" />
            <HeroScene />
            <div className="hero-floating-pill hero-floating-pill-top">Verified home service network</div>
            <div className="hero-floating-pill hero-floating-pill-right">Escrow-secured bookings</div>
            <div className="hero-signal hero-signal-one" />
            <div className="hero-signal hero-signal-two" />
            <div className="hero-visual-card hero-visual-card-main">
              <span className="hero-visual-label">ServiceHub highlights</span>
              <strong>Book trusted vendors faster</strong>
              <p>Verified profiles, transparent quotes, and secure project coordination in one place.</p>
            </div>
            <div className="hero-visual-card hero-visual-card-metric">
              <span className="hero-mini-label">Why clients choose us</span>
              <strong>Safer hiring journey</strong>
              <p>Compare services, save favorites, and book with confidence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
