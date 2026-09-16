import type { Metadata } from "next";
import { Stars } from "@/components/Stars";
import { business, patientQuotes } from "@/lib/business";

export const metadata: Metadata = {
  title: "Patient voice",
};

export default function TestimonialsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <h1>Patient voice</h1>
          <p>
            Quotes below are taken from the practice website and from online feedback summarised in
            the CQC assessment. No Google or Trustpilot score is invented on this concept.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="shell">
          <div className="quote-grid">
            {patientQuotes.map((item) => (
              <article key={item.quote} className="quote-card">
                <Stars />
                <blockquote>“{item.quote}”</blockquote>
                <footer>
                  {item.attribution}
                  {" · "}
                  <a href={item.sourceUrl} rel="noopener noreferrer" target="_blank">
                    Source
                  </a>
                </footer>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            Read the CQC inspection summary:{" "}
            <a href={business.cqcInspectionSummaryUrl} rel="noopener noreferrer" target="_blank">
              {business.cqcUrl}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
