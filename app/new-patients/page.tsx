import type { Metadata } from "next";
import Link from "next/link";
import { business, freeConsultOffers, newPatientNotes, pathwaySteps } from "@/lib/business";

export const metadata: Metadata = {
  title: "New patients",
};

export default function NewPatientsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <h1>New patients</h1>
          <p>
            Start with a phone call or email. The practice welcomes new patients, with the note that
            NHS books may close when demand is high.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">How to begin</p>
            <h2>Call first — then visit the High Street.</h2>
          </div>
          <div className="pathway-grid">
            {pathwaySteps.map((step) => (
              <article key={step.title} className="pathway-card">
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
          <div className="prose" style={{ marginTop: "2rem" }}>
            <h2>What the practice says</h2>
            <ul>
              {newPatientNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
            <h2>Invisalign consultation offers (as promoted)</h2>
            <p>
              The free consultation page promotes the following — confirm what is currently
              available when you contact the practice:
            </p>
            <ul>
              {freeConsultOffers.map((offer) => (
                <li key={offer}>{offer}</li>
              ))}
            </ul>
            <div className="notice-box">
              <p style={{ margin: 0 }}>
                This concept site does not take bookings or collect patient data. The practice’s
                public “book online” buttons currently lead to an inactive booking service, so please
                call or email instead.
              </p>
            </div>
            <p className="hero-actions">
              <a className="button button-gold" href={`tel:${business.phoneTel}`}>
                Call {business.phoneDisplay}
              </a>
              <a className="button button-outline" href={`mailto:${business.email}`}>
                Email {business.email}
              </a>
              <Link className="button button-dark" href="/visit">
                Opening times &amp; directions
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
