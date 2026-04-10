export default function AboutPage() {
  return (
    <main className="page section-block about-page">
      <section className="about-hero">
        <div>
          <span className="eyebrow">About ServiceHub</span>
          <h1>Home work should feel clear before anyone rings the bell.</h1>
          <p>
            ServiceHub connects clients with verified vendors for painting, POP work, windows, renovation,
            maintenance, repairs, cleaning, and installation services.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
          alt="Modern home interior"
        />
      </section>

      <section className="about-grid">
        <article className="workspace-panel">
          <h2>For clients</h2>
          <p>Browse services and vendor work publicly, then sign in when you are ready to book, save, review, or chat.</p>
        </article>
        <article className="workspace-panel">
          <h2>For vendors</h2>
          <p>Publish services, post gallery work, manage orders, and reply to client conversations from one workspace.</p>
        </article>
        <article className="workspace-panel">
          <h2>For the platform</h2>
          <p>Escrow, order status, reviews, and messaging are shaped to support safer service delivery as the product grows.</p>
        </article>
      </section>
    </main>
  );
}
