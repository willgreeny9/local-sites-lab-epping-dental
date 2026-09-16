import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Invisalign & orthodontics",
};

export default function Page() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow" style={{ color: "#d8c78d" }}>Treatments</p>
          <h1>Invisalign & orthodontics</h1>
          <p>The practice promotes Invisalign and orthodontics, including a free Invisalign consultation pathway on its website.</p>
        </div>
      </header>
      <section className="section">
        <div className="shell split-page">
          <div className="prose">
            <h2>What the practice lists</h2>
            <ul>
              <li>Invisalign & Orthodontics</li>
              <li>Free Invisalign consultation (as promoted on the practice site)</li>
              <li>Promoted consult offers may include discount on Invisalign, free tooth whitening, free AI dental monitoring and free tooth contouring — confirm current offers when you call</li>
            </ul>
            <div className="notice-box">
              <p style={{ margin: 0 }}>Offers change; always verify with the practice before travelling.</p>
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
