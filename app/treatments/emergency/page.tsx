import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Emergency care",
};

export default function Page() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow" style={{ color: "#d8c78d" }}>Treatments</p>
          <h1>Emergency care</h1>
          <p>The practice can help with a range of dental emergencies during surgery hours: investigate the source of discomfort and carry out necessary treatment.</p>
        </div>
      </header>
      <section className="section">
        <div className="shell split-page">
          <div className="prose">
            <h2>What the practice lists</h2>
            <ul>
              <li>Treatment for pain</li>
              <li>Fractured teeth</li>
              <li>Trauma and swelling</li>
              <li>Crown, veneer or bridge re-cementation or repair</li>
              <li>First stage root canal treatment</li>
            </ul>
            <div className="notice-box">
              <p style={{ margin: 0 }}>For a full consultation you need to book a separate appointment. Outside normal surgery hours, the practice site directs patients to its Uxbridge Dental Emergency Centre on a non-NHS basis or to call NHS 111.</p>
            </div>
            <p>
              <Link href="/treatments">← All treatments</Link>
            </p>
          </div>
          <aside className="contact-panel">
            <h2>Ask about this treatment</h2>
            <ul className="contact-list">
              <li>
                <strong>Phone</strong>
                <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
              </li>
              <li>
                <strong>Email</strong>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </li>
              <li>
                <strong>Visit</strong>
                <span>{business.addressDisplay}</span>
              </li>
            </ul>
            <p style={{ marginTop: "1rem" }}>
              <a className="button button-gold" href={`tel:${business.phoneTel}`}>
                Call the practice
              </a>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
