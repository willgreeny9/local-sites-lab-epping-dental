import type { Metadata } from "next";
import { business, hours } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <h1>Contact</h1>
          <p>Call or email the practice — this concept does not send forms or take appointments.</p>
        </div>
      </header>
      <section className="section">
        <div className="shell split-page">
          <div className="prose">
            <h2>Speak to the team</h2>
            <p>
              Use the phone number or email address published by Epping Dental. If you are asking
              about NHS availability, say so when you call — books may close from time to time.
            </p>
            <div className="notice-box">
              <p style={{ margin: 0 }}>
                No online enquiry form is provided here on purpose. The practice’s public book-online
                links currently return an inactive booking service error, and this concept never
                pretends an unconfigured form delivers mail or patient data.
              </p>
            </div>
            <p className="hero-actions">
              <a className="button button-gold" href={`tel:${business.phoneTel}`}>
                Call {business.phoneDisplay}
              </a>
              <a className="button button-outline" href={`mailto:${business.email}`}>
                Email {business.email}
              </a>
            </p>
            <h2>Social</h2>
            <p>
              <a href={business.facebookUrl} rel="noopener noreferrer" target="_blank">
                Facebook
              </a>
              {" · "}
              <a href={business.instagramUrl} rel="noopener noreferrer" target="_blank">
                Instagram
              </a>
            </p>
          </div>
          <aside className="contact-panel">
            <h2>Practice details</h2>
            <ul className="contact-list">
              <li>
                <strong>Address</strong>
                <span>{business.addressDisplay}</span>
              </li>
              <li>
                <strong>Phone</strong>
                <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
              </li>
              <li>
                <strong>Email</strong>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </li>
              <li>
                <strong>CQC</strong>
                <a href={business.cqcUrl} rel="noopener noreferrer" target="_blank">
                  Location {business.cqcLocationId}
                </a>
              </li>
            </ul>
            <h3 style={{ marginTop: "1.25rem" }}>Opening times</h3>
            <ul className="hours-list">
              {hours.map((row) => (
                <li key={row.day}>
                  <span>{row.day}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
