import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Specialist & restorative",
};

export default function Page() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow" style={{ color: "#d8c78d" }}>Treatments</p>
          <h1>Specialist & restorative</h1>
          <p>Treatments listed on the practice site include endodontics, periodontics, extractions & oral surgery, and E-Max crowns & veneers. Dentists can also refer patients for prompt specialist care.</p>
        </div>
      </header>
      <section className="section">
        <div className="shell split-page">
          <div className="prose">
            <h2>What the practice lists</h2>
            <ul>
              <li>Endodontics</li>
              <li>Periodontics</li>
              <li>Extractions & oral surgery (wording clarified from the practice list)</li>
              <li>E-Max Crowns & Veneers</li>
              <li>Referral pathway for other dentists (usually within about a week of referral, as stated)</li>
            </ul>
            <div className="notice-box">
              <p style={{ margin: 0 }}>Only the treatment referred for is provided for referred patients, who are then discharged back to their usual practice (as stated on the referrals page).</p>
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
