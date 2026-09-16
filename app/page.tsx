import Link from "next/link";
import { Stars } from "@/components/Stars";
import {
  business,
  cqcSummary,
  hours,
  pathwaySteps,
  patientQuotes,
  treatmentGroups,
  trustPoints,
} from "@/lib/business";

export default function HomePage() {
  return (
    <>
      <section className="hero-pathway" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-kicker">NHS &amp; private · Epping High Street</p>
          <h1 id="hero-title">Clear dental care, calm High Street practice.</h1>
          <p className="lede">
            Epping Dental is a small team providing quality, affordable NHS and private dental
            care at {business.address.line1}. Call or email to ask about new-patient
            availability and the treatment you need.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href={`tel:${business.phoneTel}`}>
              Call {business.phoneDisplay}
            </a>
            <a className="button button-outline" href={`mailto:${business.email}`}>
              Email the practice
            </a>
            <Link className="button button-dark" href="/treatments">
              Browse treatments
            </Link>
          </div>
          <p className="hero-note">
            NHS books may close from time to time when demand is high. For current prices, visit
            or call the practice.
          </p>
        </div>
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-smile.jpg"
            alt="Bright smile — imagery used on the Epping Dental website"
            width={1190}
            height={690}
          />
        </div>
      </section>

      <section className="social-proof" aria-label="Trust and inspection">
        <div className="shell social-proof-inner">
          <a
            className="social-proof-card"
            href={business.cqcUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="social-proof-copy">
              <strong>{cqcSummary.title}</strong>
              <span>
                CQC location {business.cqcLocationId} · report published{" "}
                {business.cqcReportPublished}. Provider: {business.provider}.
              </span>
              <div className="social-proof-chips" aria-hidden="true">
                {cqcSummary.domains.map((domain) => (
                  <span key={domain} className="social-proof-chip-static">
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </a>
          <Link className="social-proof-card" href="/testimonials">
            <div className="social-proof-copy">
              <Stars />
              <strong>Patient voice</strong>
              <span>
                Quotes published on the practice site and online feedback summarised in the CQC
                assessment — no invented platform score.
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section" id="pathway" aria-labelledby="pathway-title">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">New patient pathway</p>
            <h2 id="pathway-title">Three clear steps before you sit in the chair.</h2>
            <p>
              This concept prioritises call and email because the practice’s public “book online”
              links currently show an inactive booking service.
            </p>
          </div>
          <div className="pathway-grid">
            {pathwaySteps.map((step) => (
              <article key={step.title} className="pathway-card">
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="treatments" aria-labelledby="treatments-title">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Treatment clarity</p>
            <h2 id="treatments-title">From NHS check-ups to Invisalign and implants.</h2>
            <p>
              Treatments listed on the practice website, grouped so you can find the right
              conversation faster.
            </p>
          </div>
          <div className="treatment-index">
            {treatmentGroups.map((group) => (
              <Link key={group.id} href={group.href} className="treatment-card">
                <h3>{group.title}</h3>
                <p>{group.summary}</p>
                <ul>
                  {group.items.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span className="card-cta">View {group.title.toLowerCase()} →</span>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: "1.25rem" }}>
            <Link className="button button-dark" href="/treatments">
              Full treatments index
            </Link>
          </p>
        </div>
      </section>

      <section className="section" id="trust" aria-labelledby="trust-title">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Why locals call</p>
            <h2 id="trust-title">Verified facts — not invented ratings.</h2>
          </div>
          <div className="trust-band">
            {trustPoints.map((item) => (
              <article key={item.title} className="trust-item">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="visit" aria-labelledby="visit-title">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Visit</p>
            <h2 id="visit-title">An oasis of calm on Epping High Street.</h2>
          </div>
          <div className="visit-panel">
            <div className="visit-copy">
              <p>
                {business.addressDisplay}. {business.stationNote} Buses: {business.busRoutes}.
              </p>
              <p>{business.parkingNote}</p>
              <p>{business.accessibilityNote}</p>
              <p>
                <a
                  className="button button-gold"
                  href={business.mapsUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Open in Google Maps
                </a>
              </p>
            </div>
            <div className="visit-hours">
              <h3>Opening times</h3>
              <ul className="hours-list">
                {hours.map((row) => (
                  <li key={row.day}>
                    <span>{row.day}</span>
                    <span>{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="voice" aria-labelledby="voice-title">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Patient voice</p>
            <h2 id="voice-title">What patients have said publicly.</h2>
          </div>
          <div className="quote-grid">
            {patientQuotes.slice(0, 3).map((item) => (
              <article key={item.quote} className="quote-card">
                <Stars />
                <blockquote>“{item.quote}”</blockquote>
                <footer>{item.attribution}</footer>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.25rem" }}>
            <Link href="/testimonials">More patient comments →</Link>
          </p>
        </div>
      </section>

      <section className="section-teal">
        <div className="shell cta-band">
          <div>
            <h2>Ready to speak to the practice?</h2>
            <p>
              Call {business.phoneDisplay} or email {business.email}. This concept site does not
              take appointments or collect patient forms.
            </p>
          </div>
          <div className="cta-actions">
            <a className="button button-gold" href={`tel:${business.phoneTel}`}>
              Call now
            </a>
            <a className="button button-outline" href={`mailto:${business.email}`} style={{ borderColor: "#f4fffe", color: "#f4fffe" }}>
              Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
