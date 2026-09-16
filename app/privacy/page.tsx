import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <h1>Privacy</h1>
          <p>How this Local Sites Lab concept site handles information.</p>
        </div>
      </header>
      <section className="section">
        <div className="shell prose">
          <p>
            This is a concept showcase website created by Local Sites Lab. It is not the live or
            official Epping Dental website and is not affiliated with or approved by the practice.
          </p>
          <h2>What we collect</h2>
          <p>
            This concept site does not provide a patient enquiry form and does not intentionally
            collect names, phone numbers, clinical details or other personal data from visitors.
          </p>
          <h2>Local storage</h2>
          <p>
            A small localStorage flag may be saved in your browser when you dismiss the Local Sites
            Lab concept notice, so the notice stays closed on later visits to this device.
          </p>
          <h2>External links</h2>
          <p>
            Links to the practice phone, email, CQC, NHS, GDC, maps and social profiles send you to
            third-party services with their own privacy practices.
          </p>
          <h2>Contact about this concept</h2>
          <p>
            Questions about Local Sites Lab:{" "}
            <a href="https://localsiteslab.com">localsiteslab.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
