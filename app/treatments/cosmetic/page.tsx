import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Cosmetic & smile care",
};

export default function Page() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow" style={{ color: "#d8c78d" }}>Treatments</p>
          <h1>Cosmetic & smile care</h1>
          <p>Cosmetic options listed on the practice website include tooth whitening, smile makeover and facial aesthetics alongside broader cosmetic dentistry.</p>
        </div>
      </header>
      <section className="section">
        <div className="shell split-page">
          <div className="prose">
            <h2>What the practice lists</h2>
            <ul>
              <li>Cosmetic dentistry</li>
              <li>Tooth Whitening</li>
              <li>Smile Makeover</li>
              <li>Facial Aesthetics</li>
            </ul>
            <div className="notice-box">
              <p style={{ margin: 0 }}>Ask the practice which options are available for your case and whether they are NHS or private.</p>
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
