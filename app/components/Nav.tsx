import Link from "next/link";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          Rama<span>RMC</span>
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
