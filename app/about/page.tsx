import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — RamaRMC",
  description:
    "RamaRMC supplies ready mix concrete to building and warehouse projects in Palwal, Haryana and the surrounding NCR region.",
};

export default function About() {
  return (
    <>
      <section className="hero wrap">
        <h1>A concrete supplier, not a middleman.</h1>
        <p className="hero-lede">
          RamaRMC is a ready mix concrete company based in Palwal, Haryana,
          serving contractors and developers building homes, commercial
          structures and warehouse floors across the region.
        </p>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <h2>Who we work with</h2>
          </div>
          <div>
            <p>
              Most of our work comes from contractors and site engineers who need
              a dependable volume of concrete on a fixed date, at a grade their
              drawings specify. Some of it comes from developers laying out
              warehouse and factory floors, where flatness and surface durability
              matter as much as strength.
            </p>
            <p>
              Whether the order is thirty cubic metres for a raft or a full day
              of continuous supply for a large-bay floor, the job is the same:
              the right mix, on site, when the crew is ready for it.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <h2>How we work</h2>
          </div>
          <div className="use-list">
            <div className="use">
              <h3>Mix design to specification</h3>
              <p>
                Each grade is batched to a designed mix rather than a nominal
                one, using aggregates and cement from consistent sources so
                strength results do not move batch to batch.
              </p>
            </div>
            <div className="use">
              <h3>Deliveries planned around your pour</h3>
              <p>
                We schedule transit mixers against the rate your crew can place,
                so concrete is not sitting in the drum and the pour is not
                stopping between trucks.
              </p>
            </div>
            <div className="use">
              <h3>Checks you can see</h3>
              <p>
                Slump is tested at the site before discharge. Cube samples can be
                cast and tested on request, with results shared for your project
                records.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <h2>Where we deliver</h2>
            <p>
              Palwal and the surrounding industrial corridor, including
              Faridabad, Hodal, Ballabgarh and nearby parts of the NCR. Sites
              further out are usually still workable — ask us.
            </p>
            <div style={{ marginTop: "24px" }}>
              <Link href="/enquiry" className="btn">
                Check your site
              </Link>
            </div>
          </div>
          <div className="contact-card">
            <dl>
              <div>
                <dt>Address</dt>
                <dd>Palwal, Haryana 121102, India</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href="tel:+917082538383">+91 70825 38383</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:info@ramarmc.com">info@ramarmc.com</a>
                </dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>Monday to Saturday, 8:00 to 19:00</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
