import Link from "next/link";
import Reveal from "./components/Reveal";
import HeroSlides from "./components/HeroSlides";

// Photo files live in /public.
const PHOTOS = {
  silos: "/plant-silos.jpg",
  wide: "/plant-wide.jpg",
  truck: "/truck-side.jpg",
  pour: "/pour.jpg",
};

const HERO_SLIDES = [
  { src: "/hero-plant.jpg", alt: "RamaRMC batching plant with transit mixer" },
  { src: "/hero-truck.jpg", alt: "RamaRMC transit mixer at the plant" },
  { src: "/hero-pour.jpg", alt: "Concrete being poured at a site" },
];

const grades = [
  { grade: "M7.5", use: "PCC, levelling, blinding" },
  { grade: "M10", use: "Bedding, non-structural fill" },
  { grade: "M15", use: "Kerbs, drains, mass fill" },
  { grade: "M20", use: "Footings, slabs, low-rise frames" },
  { grade: "M25", use: "Columns, beams, rafts" },
  { grade: "M30", use: "Warehouse floors, loading bays" },
  { grade: "M35–M40", use: "High-rise frames, heavy floors" },
  { grade: "M45–M60", use: "High-strength and precast work" },
  { grade: "SCC", use: "Self-compacting, for congested rebar and fair-face finishes" },
];

const clients = [
  {
    name: "Larsen & Toubro Ltd.",
    about: "India’s largest engineering and construction company",
  },
  {
    name: "Poly Medicure Ltd.",
    about: "Medical device maker with plants in Faridabad",
  },
  {
    name: "Action Construction Equipment Ltd. (ACE)",
    about: "Crane and construction equipment maker, headquartered in Palwal",
  },
  {
    name: "Semac Construction Ltd.",
    about: "EPC contractor for industrial and commercial projects",
  },
  {
    name: "Associate Developers",
    about: "Construction and real estate development",
  },
  {
    name: "Nisha Engineers Infratech Pvt. Ltd.",
    about: "Building and infrastructure contractor since 2008",
  },
];

function Photo({
  src,
  alt,
  caption,
  position,
  ratio,
}: {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
  ratio?: string;
}) {
  return (
    <div className="photo" style={ratio ? { aspectRatio: ratio } : undefined}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={position ? { objectPosition: position } : undefined}
        />
      ) : (
        <div className="photo-empty">
          Photo slot: {alt}. Drop the file in /public and set its name in
          app/page.tsx.
        </div>
      )}
      {src && caption && <span className="photo-caption">{caption}</span>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero-photo">
        <HeroSlides slides={HERO_SLIDES} />
        <div className="wrap hero-content">
          <span className="hero-kicker">Ready mix concrete · Palwal, Haryana</span>
          <h1>Concrete that arrives ready to pour.</h1>
          <p className="hero-lede">
            Batched at our own plant and delivered to building sites and
            warehouse floors across Palwal, Faridabad and the NCR industrial
            belt.
          </p>
          <div style={{ marginTop: "32px" }}>
            <Link href="/enquiry" className="btn btn-signal">
              Get a quote for your pour
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="grades" style={{ marginTop: 0 }}>
          {grades.map((g) => (
            <div className="grade" key={g.grade}>
              <b>{g.grade}</b>
              <small>{g.use}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className="wrap photo-split">
          <Photo
            src={PHOTOS.silos}
            alt="Cement silos and mixing tower at the RamaRMC plant"
            caption="Batching plant, Palwal"
          />
          <div>
            <h2>Batched at our own plant in Palwal.</h2>
            <p className="lead">
              Cement silos, aggregate bins and a batching tower on our own
              yard in Palwal.
            </p>
            <p>
              Every load is weighed and mixed here, to the grade on your
              drawing, and loaded straight onto the transit mixer. No
              third-party plant, no guessing what went into the drum.
              That&rsquo;s what we mean by concreting trust.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="wrap photo-split flip">
          <Photo
            src={PHOTOS.pour}
            alt="Concrete being poured at a site"
            caption="On site"
          />
          <div className="use-list">
            <div>
              <h2>What we pour</h2>
            </div>
            <div className="use">
              <h3>Buildings</h3>
              <p>
                Foundations, columns, beams and slabs for residential and
                commercial structures. Mix design matched to the grade and
                exposure your drawings call for, scheduled so pours run
                without a cold joint.
              </p>
            </div>
            <div className="use">
              <h3>Warehouse and industrial floors</h3>
              <p>
                Large-bay floors take a beating from forklifts and racking
                loads. We supply higher-grade mixes with controlled slump for
                floors laid to a flatness spec, and plan deliveries around
                the laying rate so the crew is never waiting on a truck.
              </p>
            </div>
            <div className="use">
              <h3>Self-compacting concrete (SCC)</h3>
              <p>
                A high-flow mix that spreads and settles under its own weight,
                with no vibrators needed. It suits heavily reinforced columns,
                thin walls, precast elements and fair-face surfaces where
                honeycombing isn&rsquo;t acceptable. Available in M30 to M60,
                with flow tested at site before placement.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="wrap photo-split">
          <Photo
            src={PHOTOS.truck}
            alt="Rama RMC transit mixer with the company logo on the drum"
            caption="Transit mixer, RMC-01"
            position="right center"
            ratio="16 / 9"
          />
          <div>
            <h2>Grades from M7.5 to M60.</h2>
            <p className="lead">
              From blinding concrete to high-strength structural mixes, batched
              to a designed mix for the grade on your drawing.
            </p>
            <p>
              Tell us the grade and the exposure condition and we match the mix
              design, admixtures and slump to it. Transit mixers are scheduled
              to your pour rate so the concrete is placed, not parked.
              Self-compacting concrete (SCC) is available for congested or
              architectural pours.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="wrap">
          <h2>Concreting trust across the NCR.</h2>
          <p className="lead">
            Industrial manufacturers, EPC contractors and developers who have
            built with our concrete.
          </p>
          <ul className="clients">
            {clients.map((c) => (
              <li key={c.name}>
                <b>{c.name}</b>
                <span>{c.about}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section section-dark">
        <Reveal className="wrap">
          <h2>How an order runs</h2>
          <p style={{ marginBottom: "44px", maxWidth: "58ch" }}>
            Tell us the grade, the volume and the date. We handle the rest.
          </p>
          <ol className="steps">
            <li>
              <h3>Send the details</h3>
              <p>
                Grade, quantity in cubic metres, site location and the date
                you need it on site.
              </p>
            </li>
            <li>
              <h3>Get a rate</h3>
              <p>
                We confirm the mix design, the rate per cubic metre and the
                delivery window.
              </p>
            </li>
            <li>
              <h3>Book the slot</h3>
              <p>
                Trucks are scheduled against your pour rate so the mix keeps
                arriving through the day.
              </p>
            </li>
            <li>
              <h3>Pour and sign off</h3>
              <p>
                Slump is checked at the site. Cube samples can be taken on
                request for your records.
              </p>
            </li>
          </ol>
        </Reveal>
      </section>

      <section className="banner">
        <img src={PHOTOS.wide} alt="RamaRMC plant yard" loading="lazy" />
        <div className="banner-text">
          <div className="wrap">
            <h2>Planning a pour?</h2>
            <p style={{ color: "#d9dcd8", marginTop: "8px" }}>
              Send the grade and quantity and we will come back with a rate.
            </p>
            <div style={{ marginTop: "20px" }}>
              <Link href="/enquiry" className="btn btn-signal">
                Start an enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
