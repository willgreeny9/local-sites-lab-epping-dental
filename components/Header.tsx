"use client";

import Link from "next/link";
import { useState } from "react";
import { business, nav } from "@/lib/business";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="utility-bar">
        <div className="shell utility-bar-inner">
          <p>
            <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
            <span aria-hidden="true"> · </span>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
          <p className="utility-meta">59 High Street, Epping · NHS &amp; private</p>
        </div>
      </div>
      <header className="site-header">
        <div className="shell site-header-inner">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="Epping Dental"
              width={52}
              height={52}
              className="brand-logo"
            />
            <span className="brand-text">
              <strong>Epping Dental</strong>
              <span>High Street · CM16 4BA</span>
            </span>
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
          <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"} aria-label="Primary">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a className="button button-gold nav-cta" href={`tel:${business.phoneTel}`}>
              Call {business.phoneDisplay}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
