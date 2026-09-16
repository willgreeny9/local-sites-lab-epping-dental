import type { Metadata } from "next";
import { business, hours } from "@/lib/business";

export const metadata: Metadata = {
  title: "Visit",
};

export default function VisitPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <h1>Visit the practice</h1>
          <p>{business.addressDisplay}</p>
        </div>
      </header>
      <section className="section">
        <div className="shell">
          <div className="visit-panel">
            <div className="visit-copy prose" style={{ maxWidth: "none" }}>
              <h2>Getting here</h2>
              <p>{business.stationNote}</p>
              <p>
                <strong>By bus:</strong> routes {business.busRoutes}.
              </p>
              <p>
                <strong>Parking:</strong> {business.parkingNote}
              </p>
              <p>
                <strong>Accessibility:</strong> {business.accessibilityNote}
              </p>
              <p>
                CQC notes step-free access and car parking spaces, including dedicated parking for
                disabled people, near the practice. The practice has {business.treatmentRooms}.
              </p>
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
              <h2>Opening times</h2>
              <ul className="hours-list">
                {hours.map((row) => (
                  <li key={row.day}>
                    <span>{row.day}</span>
                    <span>{row.time}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "1rem", fontSize: "0.95rem", color: "var(--muted)" }}>
                Outside normal surgery hours for emergencies, the practice site directs patients to
                its Uxbridge Dental Emergency Centre (non-NHS) or NHS 111.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
