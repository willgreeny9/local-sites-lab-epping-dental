import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Dental implants",
};

export default function Page() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow" style={{ color: "#d8c78d" }}>Treatments</p>
          <h1>Dental implants</h1>
          <p>Dental implants are listed among the practice’s promoted treatments for replacing missing teeth.</p>
        </div>
      </header>
      <section className="section">
        <div className="shell split-page">
          <div className="prose">
            <h2>What the practice lists</h2>
            <ul>
              <li>Dental Implants</li>
              <li>Discuss suitability, timelines and private fees with the practice</li>
            </ul>
            <div className="notice-box">
              <p style={{ margin: 0 }}>Implant care is clinical and case-specific — this page does not invent outcomes or prices.</p>
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
