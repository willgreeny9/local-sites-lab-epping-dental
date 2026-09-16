import type { Metadata } from "next";
import Link from "next/link";
import { business, treatmentGroups } from "@/lib/business";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "NHS and private dentistry, Invisalign, implants, emergency care and more at Epping Dental.",
};

export default function TreatmentsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <h1>Treatments</h1>
          <p>
            From fillings to Invisalign — a comprehensive list published by the practice, rewritten
            here for clarity. Call {business.phoneDisplay} to discuss a treatment in more detail.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="shell">
          <div className="treatment-index">
            {treatmentGroups.map((group) => (
              <Link key={group.id} href={group.href} className="treatment-card">
                <h2 style={{ fontSize: "1.3rem" }}>{group.title}</h2>
                <p>{group.summary}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span className="card-cta">Open guide →</span>
              </Link>
            ))}
          </div>
          <div className="notice-box" style={{ marginTop: "1.5rem" }}>
            <p style={{ margin: 0 }}>
              Epping Dental describes a highly experienced team of dental surgeons, specialists and
              consultants on its treatments page. Ask the practice which clinician is right for your
              care — this concept does not invent named clinicians or prices.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
