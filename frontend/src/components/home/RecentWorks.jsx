import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Eye, Heart } from "lucide-react";

const works = [
  {
    id: 1,
    title: "Modern Living Room Paint",
    vendor: "John Builders",
    description: "Complete interior painting with premium finish",
    image: "https://images.unsplash.com/photo-1573546005910-cf18cae9f39c?auto=format&fit=crop&w=900&q=80",
    likes: 156,
    views: 1234
  },
  {
    id: 2,
    title: "Luxury False Ceiling",
    vendor: "Elite Interiors",
    description: "Designer POP false ceiling with LED lighting",
    image: "https://images.unsplash.com/photo-1714462187247-add7ed99e5d2?auto=format&fit=crop&w=900&q=80",
    likes: 203,
    views: 2145
  },
  {
    id: 3,
    title: "Custom Window Installation",
    vendor: "Modern Windows Co.",
    description: "Aluminum windows with modern design",
    image: "https://images.unsplash.com/photo-1758923530724-1ad597412421?auto=format&fit=crop&w=900&q=80",
    likes: 189,
    views: 1856
  },
  {
    id: 4,
    title: "Wall Plastering Project",
    vendor: "Perfect Plaster",
    description: "Smooth plastering and finishing work",
    image: "https://images.unsplash.com/photo-1766961980272-921bba4240bc?auto=format&fit=crop&w=900&q=80",
    likes: 142,
    views: 1423
  }
];

export default function RecentWorks() {
  return (
    <section className="page section-block" id="gallery">
      <div className="section-headline">
        <h2>Recent Vendor Works</h2>
        <p>Explore latest project examples published by professionals.</p>
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 760: 2, 1020: 3 }}>
        <Masonry gutter="16px">
          {works.map((work) => (
            <article key={work.id} className="work-card">
              <div className="work-image-wrap">
                <img src={work.image} alt={work.title} className="work-image" />
                <div className="work-overlay">
                  <span><Heart size={14} /> {work.likes}</span>
                  <span><Eye size={14} /> {work.views}</span>
                </div>
              </div>
              <div className="work-body">
                <h3>{work.title}</h3>
                <p className="work-vendor">by {work.vendor}</p>
                <p>{work.description}</p>
              </div>
            </article>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}
