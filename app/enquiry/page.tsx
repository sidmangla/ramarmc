"use client";

import { useState } from "react";

// Paste your Web3Forms access key here (web3forms.com -> enter your email -> copy key)
const ACCESS_KEY = "40192ca1-79f0-41ef-818a-0e580228b9ca";

export default function Enquiry() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "New concrete enquiry from ramarmc.com");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="hero wrap">
        <h1>Tell us about the pour.</h1>
        <p className="hero-lede">
          Grade, quantity and date are enough to get you a rate. We usually reply
          the same working day.
        </p>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="checkbox"
              name="botcheck"
              className="hp"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="row">
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div className="field">
                <label htmlFor="company">Company (optional)</label>
                <input id="company" name="company" type="text" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
            </div>

            <div className="field">
              <label htmlFor="site">Site location</label>
              <input
                id="site"
                name="site_location"
                type="text"
                placeholder="Area, town or landmark"
                required
              />
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="grade">Concrete grade</label>
                <select id="grade" name="grade" defaultValue="">
                  <option value="">Not sure yet</option>
                  {["M7.5", "M10", "M15", "M20", "M25", "M30", "M35", "M40", "M45", "M50", "M55", "M60"].map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="quantity">Quantity (cubic metres)</label>
                <input id="quantity" name="quantity" type="number" min="1" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="date">Date required</label>
                <input id="date" name="date_required" type="date" />
              </div>
              <div className="field">
                <label htmlFor="work">Type of work</label>
                <select id="work" name="work_type" defaultValue="">
                  <option value="">Select</option>
                  <option>Building — foundation or slab</option>
                  <option>Building — columns and beams</option>
                  <option>Warehouse or industrial floor</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Anything else we should know</label>
              <textarea id="message" name="message" rows={4} />
            </div>

            <div>
              <button
                type="submit"
                className="btn btn-signal"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send enquiry"}
              </button>
            </div>

            {status === "sent" && (
              <p className="status">
                Enquiry received. We will call or email you back shortly.
              </p>
            )}
            {status === "error" && (
              <p className="status status-error">
                The enquiry did not send. Call +91 70825 38383 and we will take
                the details over the phone.
              </p>
            )}

            <p className="note">
              We use your details only to respond to this enquiry.
            </p>
          </form>

          <div className="contact-card">
            <dl>
              <div>
                <dt>Call</dt>
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
                <dt>Office</dt>
                <dd>Palwal, Haryana 121102</dd>
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
