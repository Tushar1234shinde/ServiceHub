import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { BadgeCheck, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

export default function RecentWorks({ works = [] }) {
  return (
    <section className="page section-block" id="gallery">
      <div className="section-headline">
        <h2>Recent Vendor Works</h2>
        <p>Explore real project examples published by vendors from their live portfolio.</p>
      </div>

      {works.length === 0 ? (
        <p className="subtle">Portfolio works will show up here once vendors start publishing project examples.</p>
      ) : (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 760: 2, 1020: 3 }}>
          <Masonry gutter="16px">
            {works.map((work) => (
              <article key={work.id} className="work-card">
                <div className="work-image-wrap">
                  <img src={work.image} alt={work.title} className="work-image" />
                  <div className="work-overlay">
                    <span><CalendarDays size={14} /> {new Date(work.createdAt).toLocaleDateString()}</span>
                    {work.vendorVerified && <span><BadgeCheck size={14} /> Verified</span>}
                  </div>
                </div>
                <div className="work-body">
                  <h3>{work.title}</h3>
                  <p className="work-vendor">by <Link to={`/vendors/${work.vendorId}`}>{work.vendorName}</Link></p>
                  <p>{work.description}</p>
                  <p className="subtle">{work.category}</p>
                </div>
              </article>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </section>
  );
}
