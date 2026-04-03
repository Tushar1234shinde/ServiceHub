import { Box, Frame, Hammer, Paintbrush, ShieldCheck, SquareDashedBottom, Wrench } from "lucide-react";

const categoryCards = [
  {
    id: "painting",
    title: "Painting",
    description: "Interior & exterior painting services",
    image: "https://images.unsplash.com/photo-1573546005910-cf18cae9f39c?auto=format&fit=crop&w=900&q=80",
    icon: Paintbrush
  },
  {
    id: "window-making",
    title: "Window Making",
    description: "Custom windows & door frames",
    image: "https://images.unsplash.com/photo-1758923530724-1ad597412421?auto=format&fit=crop&w=900&q=80",
    icon: Frame
  },
  {
    id: "plastering",
    title: "Plastering",
    description: "Wall plastering & finishing",
    image: "https://images.unsplash.com/photo-1766961980272-921bba4240bc?auto=format&fit=crop&w=900&q=80",
    icon: SquareDashedBottom
  },
  {
    id: "pop",
    title: "POP / False Ceiling",
    description: "Modern false ceiling designs",
    image: "https://images.unsplash.com/photo-1714462187247-add7ed99e5d2?auto=format&fit=crop&w=900&q=80",
    icon: Box
  },
  {
    id: "pvc-modular",
    title: "PVC / Modular Work",
    description: "Modular kitchen & furniture",
    image: "https://images.unsplash.com/photo-1736390800504-d3963b553aa3?auto=format&fit=crop&w=900&q=80",
    icon: Hammer
  },
  {
    id: "renovation",
    title: "Renovation",
    description: "Complete home & office renovation",
    image: "https://images.unsplash.com/photo-1768321902290-54497eeb9cf6?auto=format&fit=crop&w=900&q=80",
    icon: Wrench
  },
  {
    id: "maintenance",
    title: "Maintenance Services",
    description: "Maintenance, repairs, cleaning, and installation services",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
    icon: ShieldCheck
  }
];

const exactCategoryText = [
  "Painting: Interior & exterior painting services",
  "Window Making: Custom windows & door frames",
  "Plastering: Wall plastering & finishing",
  "POP / False Ceiling: Modern false ceiling designs",
  "PVC / Modular Work: Modular kitchen & furniture",
  "Renovation: Complete home & office renovation",
  "Maintenance, repairs, cleaning, and installation services"
];

export default function CategoryGrid() {
  return (
    <section className="section-strip" id="services-categories">
      <div className="page section-block">
        <div className="section-headline">
          <h2>Work Categories</h2>
          <p>Explore professional services for construction and interior improvement.</p>
        </div>

        <ul className="category-text-list">
          {exactCategoryText.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <div className="category-grid">
          {categoryCards.map((category) => {
            const Icon = category.icon;
            return (
              <article key={category.id} className="category-tile image-card">
                <div className="category-image-wrap">
                  <img src={category.image} alt={category.title} className="category-image" />
                </div>
                <div className="category-body">
                  <div className="category-icon"><Icon size={18} /></div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
