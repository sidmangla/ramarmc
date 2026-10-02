import Link from "next/link";
import type { Metadata } from "next";
import { products, gradeGuide } from "../products";

export const metadata: Metadata = {
  title: "Products — Rama RMC",
  description:
    "Ready mix concrete from M7.5 to M60, plus self-compacting (SCC), temperature-controlled (TCC) and lightweight (LWC) concrete, supplied across Palwal, Faridabad and the NCR.",
};

const included = [
  {
    title: "Designed mix",
    text: "Every grade batched to a designed mix for your strength and exposure condition.",
  },
  {
    title: "Slump checked at site",
    text: "Workability is checked when the truck arrives, before the concrete is placed.",
  },
  {
    title: "Cube samples on request",
    text: "Cubes can be cast at site for your quality records and testing.",
  },
  {
    title: "Scheduled to your pour",
    text: "Transit mixers are timed to your pour rate so the crew is never waiting.",
  },
];

export default function Products() {
  return (
    <>
      <section className="hero wrap product-hero">
        <span className="page-kicker">Our products</span>
        <h1>Concrete for every pour.</h1>
        <p className="hero-lede">
          Standard and high-strength grades from M7.5 to M60, plus special
          concretes for congested, massive and lightweight work. All batched at
          our own plant in Palwal.
        </p>
        <nav className="product-jump" aria-label="Products">
          {products.map((p) => (
            <a key={p.id} href={`#${p.id}`}>
              {p.code}
            </a>
          ))}
        </nav>
      </section>

      {products.map((p, i) => (
        <section className="section product-row" id={p.id} key={p.id}>
          <div className={`wrap photo-split${i % 2 ? " flip" : ""}`}>
            <div className="photo">
              <img src={p.photo} alt={p.photoAlt} loading="lazy" />
              <span className="product-code">{p.code}</span>
            </div>
            <div>
              <span className="product-range">{p.range}</span>
              <h2>{p.name}</h2>
              <p className="lead">{p.pitch}</p>
              <p>{p.detail}</p>
              <ul className="product-uses">
                {p.uses.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
              <Link href={`/enquiry?product=${p.id}`} className="btn btn-signal">
                Get a quote for {p.code}
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="wrap two-col">
          <div>
            <h2>Which grade do I need?</h2>
            <p className="lead" style={{ marginTop: "16px" }}>
              A quick guide to the grades most often used for each job.
            </p>
            <p className="note">
              Your structural engineer&rsquo;s drawing always sets the final
              grade. If you&rsquo;re unsure, send us the drawing and we&rsquo;ll
              advise.
            </p>
          </div>
          <table className="grade-guide">
            <thead>
              <tr>
                <th>Work</th>
                <th>Typical grade</th>
              </tr>
            </thead>
            <tbody>
              {gradeGuide.map((g) => (
                <tr key={g.job}>
                  <td>{g.job}</td>
                  <td>{g.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <h2>Included with every order</h2>
          <ol className="steps" style={{ marginTop: "44px" }}>
            {included.map((x) => (
              <li key={x.title}>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap product-cta">
          <div>
            <h2>Not sure which mix fits?</h2>
            <p className="lead" style={{ marginTop: "12px" }}>
              Tell us the job, the quantity and the date. We&rsquo;ll recommend
              the mix and come back with a rate.
            </p>
          </div>
          <div className="product-cta-actions">
            <Link href="/enquiry" className="btn btn-signal">
              Start an enquiry
            </Link>
            <a href="tel:+917082538383" className="btn btn-ghost">
              Call +91 70825 38383
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
