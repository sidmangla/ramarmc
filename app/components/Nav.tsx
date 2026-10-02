import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand" aria-label="Rama RMC home">
          <Image
            src="/logo.webp"
            alt="Rama RMC — Concreting Trust"
            width={1000}
            height={403}
            priority
            className="brand-logo"
          />
        </Link>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/enquiry">Get a quote</Link>
        </nav>
      </div>
    </header>
  );
}
