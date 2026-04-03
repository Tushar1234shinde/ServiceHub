import { Briefcase, Camera, Globe, Link2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page footer-grid">
        <div>
          <div className="footer-brand">
            <span className="brand-mark"><Briefcase size={16} /></span>
            <strong>ServiceHub</strong>
          </div>
          <p>Connecting clients with trusted professionals for home and office services.</p>
          <div className="social-links">
            <a href="#" aria-label="Website"><Globe size={16} /></a>
            <a href="#" aria-label="Community"><MessageCircle size={16} /></a>
            <a href="#" aria-label="Gallery"><Camera size={16} /></a>
            <a href="#" aria-label="Links"><Link2 size={16} /></a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#vendors">Vendors</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="contact-list">
            <li><MapPin size={15} /> 123 Service Street, Business District</li>
            <li><Phone size={15} /> +1 (555) 123-4567</li>
            <li><Mail size={15} /> contact@servicehub.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">Copyright 2026 ServiceHub. All rights reserved.</div>
    </footer>
  );
}
