import Link from "next/link";
import { business, hours } from "@/lib/business";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer-grid">
        <div>
          <p className="footer-kicker">Epping Dental</p>
          <p>{business.addressDisplay}</p>
          <p>
            <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
        </div>
        <div>
          <p className="footer-kicker">Opening times</p>
          <ul className="hours-list">
            {hours.map((row) => (
              <li key={row.day}>
                <span>{row.day}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-kicker">Explore</p>
          <ul className="footer-links">
            <li>
              <Link href="/treatments">Treatments</Link>
            </li>
            <li>
              <Link href="/new-patients">New patients</Link>
            </li>
            <li>
              <Link href="/visit">Visit</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <a href={business.cqcUrl} rel="noopener noreferrer" target="_blank">
                CQC location
              </a>
            </li>
            <li>
              <a href={business.gdcUrl} rel="noopener noreferrer" target="_blank">
                General Dental Council
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="shell footer-note">
        <p>
          Concept showcase by{" "}
          <a href="https://localsiteslab.com">Local Sites Lab</a>. Not the live or official
          Epping Dental website.
        </p>
      </div>
    </footer>
  );
}
