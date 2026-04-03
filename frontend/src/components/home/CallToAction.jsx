import { CheckCircle, Search, UserPlus } from "lucide-react";

export default function CallToAction({ onExplore, onJoin }) {
  return (
    <section className="page">
      <article className="cta-banner">
        <div>
          <h2>Need quality work done by verified professionals?</h2>
          <p>Join thousands of clients managing projects with escrow safety.</p>
          <div className="cta-points">
            <span><CheckCircle size={16} /> Verified Vendors</span>
            <span><CheckCircle size={16} /> Quality Guaranteed</span>
            <span><CheckCircle size={16} /> Transparent Pricing</span>
          </div>
        </div>
        <div className="cta-actions">
          <button className="primary-button" onClick={onExplore}><Search size={16} /> Explore Services</button>
          <button className="ghost-button hero-outline" onClick={onJoin}><UserPlus size={16} /> Join as Vendor</button>
        </div>
      </article>
    </section>
  );
}
