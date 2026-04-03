import { Search, UserPlus } from "lucide-react";
import HeroScene from "./HeroScene";

export default function Hero({ servicesCount, vendorsCount, savedCount, onFindVendors, onBecomeVendor }) {
  return (
    <section className="market-hero" id="home">
      <div className="market-hero-overlay" />
      <div className="market-hero-content page">
        <div className="market-hero-inner">
          <div className="hero-copy">
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
            <HeroScene />
            <div className="hero-visual-card">
              <span className="hero-visual-label">Live platform energy</span>
              <strong>3D motion layer</strong>
              <p>Interactive Three.js background reacting to cursor movement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
