import Link from "next/link";

const grades = [
  { grade: "M10", use: "Levelling course, PCC bedding" },
  { grade: "M15", use: "Non-structural fill, kerbs" },
  { grade: "M20", use: "Footings, slabs, low-rise frames" },
  { grade: "M25", use: "Columns, beams, raft foundations" },
  { grade: "M30", use: "Warehouse floors, loading bays" },
  { grade: "M35", use: "Heavy-duty industrial flooring" },
];

export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <h1>Concrete that arrives ready to pour.</h1>
        <p className="hero-lede">
          RamaRMC batches and delivers ready mix concrete to building sites and
          warehouse floors across Palwal, Faridabad and the surrounding NCR
          industrial belt.
        </p>
        <div style={{ marginTop: "32px" }}>
          <Link href="/enquiry" className="btn btn-signal">
            Get a quote for your pour
          </Link>
        </div>

        <div className="grades">
          {grades.map((g) => (
            <div className="grade" key={g.grade}>
              <b>{g.grade}</b>
              <small>{g.use}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <h2>What we pour</h2>
            <p className="lead">
              Two kinds of work, with different demands on the mix.
            </p>
          </div>
          <div className="use-list">
            <div className="use">
              <h3>Buildings</h3>
              <p>
                Foundations, columns, beams and slabs for residential and
                commercial structures. Mix design is matched to the grade and
                exposure your structural drawings call for, and scheduled so
                pours run without a cold joint.
              </p>
            </div>
            <div className="use">
              <h3>Warehouse and industrial floors</h3>
              <p>
                Large-bay floors take a beating from forklifts, racking loads and
                turning traffic. We supply higher-grade mixes with controlled
                slump for floors laid to a flatness spec, and plan deliveries
                around the laying rate so the crew is never waiting on a truck.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <h2>How an order runs</h2>
          <p style={{ marginBottom: "44px", maxWidth: "58ch" }}>
            Tell us the grade, the volume and the date. We handle the rest.
          </p>
          <ol className="steps">
            <li>
              <h3>Send the details</h3>
              <p>
                Grade, quantity in cubic metres, site location and the date you
                need it on site.
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
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Planning a pour?</h2>
          <p className="lead">
            Send the grade and quantity and we will come back with a rate.
          </p>
          <div style={{ marginTop: "24px" }}>
            <Link href="/enquiry" className="btn">
              Start an enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
