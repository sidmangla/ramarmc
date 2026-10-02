import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Image
            src="/logo.webp"
            alt="Rama RMC — Concreting Trust"
            width={1000}
            height={401}
            className="footer-logo"
          />
          <p>
            Ready mix concrete batched at our own plant and delivered to
            building sites and warehouse floors across Palwal, Faridabad and
            the NCR.
          </p>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/enquiry">Get a quote</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <span>Palwal, Haryana 121102</span>
          <a href="tel:+917082538383">+91 70825 38383</a>
          <a href="mailto:info@ramarmc.com">info@ramarmc.com</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        © {new Date().getFullYear()} Rama RMC · Concreting Trust
      </div>
    </footer>
  );
}
