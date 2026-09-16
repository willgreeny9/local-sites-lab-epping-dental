import type { Metadata } from "next";
import { business, cqcSummary, trustPoints } from "@/lib/business";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <h1>About Epping Dental</h1>
          <p>
            A family dental practice in a cottage on Epping High Street, described by the practice
            as an oasis of calm within the hustle and bustle of Epping.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="shell split-page">
          <div className="prose">
            <h2>Small team, NHS and private care</h2>
            <p>
              Epping Dental is a small team providing quality, yet affordable, NHS and private dental
              care. Patients are described as happy to revisit and to recommend the practice to
              friends and families, with attentive standards of care before, during and after
              treatment.
            </p>
            <p>
              The practice highlights an accessible environment with free nearby parking, infection
              control standards, and a prompt, courteous response to patient concerns.
            </p>
            <h2>CQC registration</h2>
            <p>
              The verified Care Quality Commission location for this practice is{" "}
              <a href={business.cqcUrl} rel="noopener noreferrer" target="_blank">
                {business.cqcLocationId}
              </a>
              , provided and run by {business.provider}. {cqcSummary.detail}
            </p>
            <div className="notice-box">
              <p style={{ margin: 0 }}>
                Important: a wrong CQC location ID ({`1-5429616873`}) appears as text on the
                practice’s current homepage and belongs to Feelgood Dental in Uxbridge. This concept
                only cites the verified Epping Dental location above.
              </p>
            </div>
            <h2>Patient safety charter</h2>
            <p>
              The practice publishes a Patient Charter covering infection prevention, instrument
              sterilisation, decontamination between patients, waterline care, waste handling,
              safeguarding training, and continuous improvement led by the practice owner.
            </p>
          </div>
          <aside>
            <div className="trust-band" style={{ gridTemplateColumns: "1fr" }}>
              {trustPoints.map((item) => (
                <article key={item.title} className="trust-item">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
