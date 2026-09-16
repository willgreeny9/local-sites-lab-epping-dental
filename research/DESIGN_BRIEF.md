# Design brief — Epping Dental (Local Sites Lab concept)

## Business & customer job
**Epping Dental** is an NHS + private dental practice at 59 High Street, Epping. Primary customer job: **call or email to ask about new-patient / treatment availability**, then visit. Sceptical locals need treatment clarity, verified CQC trust, and an obvious call/email path — not a broken book-online button.

## Layout name: Treatment Clarity Pathway
Unique clinical/consultative architecture (hard fail if it reads like a builder/kitchen LSL clone):

1. Dark clinical header with gold ED logo (high contrast).
2. **Split consult hero** — solid cream copy panel **beside** full-bleed smile photo (no scrim, no text-over-image).
3. **CQC trust strip** near top (no invented Google score).
4. **Three-step new-patient pathway** (Call → Visit → Discuss).
5. **Treatment clarity index** — categorised whole-card links (NHS/private, Invisalign, implants, emergency, specialist, cosmetic).
6. Visit panel (hours, access, transport).
7. Patient voice teasers → `/testimonials`.
8. Final call/email band.

This differs from Mack/DSB/Premier/PosCon trade emergency layouts and from Foot & Ellis-Smith’s “Practice Desk” accounting meeting pathway: dental uses a **clinical treatment taxonomy + CQC-first trust**, serif clinical typography, and black/gold brand plates.

## Brand colours (from logo)
- Gold: `#B49D52` (sampled ~rgb(180,157,82) from favicon)
- Black plate: `#0B0B0B` / ink `#14110C`
- Cream clinical: `#F7F1E6`
- Soft stone: `#E8E0D4`
- Accent clinical teal (supporting role, not logo): `#1F4B4A` for secondary links
- LSL bar: `#0B1220` / `#EAFF38`
- Review stars: `#F4B400`

Header fill: near-black so gold logo mark reads cleanly.

## Typography
- Headings: **Source Serif 4** — clinical authority matching ED serif mark.
- Body/UI: **DM Sans** — clear consultative reading.

## Methodology & conversion research (literal URLs)
- Material 3 colour roles / contrast: https://m3.material.io/styles/color/system/overview
- Component patterns: https://component.gallery/
- Design systems index: https://designsystems.one/
- NHS service finder pattern (availability clarity): https://www.nhs.uk/service-search/find-a-dentist/
- CQC public location pages as trust anchors: https://www.cqc.org.uk/location/1-5429824686
- Competitor / peer UX notes (UK dental): strong practices lead with call CTA, treatment menus, CQC/GDC trust, and new-patient clarity rather than decorative galleries alone — e.g. patterns visible across CQC-registered High Street practices and NHS Find a Dentist listing emphasis on contact + opening times.

## Logo & image sources
Official mark saved as `public/images/logo.png` (from https://www.eppingdental.co.uk/images/eppingfavicon.png). See `SOURCE_LOG.md`. Prefer official logo mark/wordmark only (ED circle) — not header composites with phone badges.

## Primary CTA pattern
**Call 01992 573 484** primary; **Email** secondary. No live appointment claim. No patient-data form delivery (booking endpoint inactive on official site).

## Safeguards
noindex + robots disallow; ConceptNotice v4; sticky LSL bar; privacy + 404; CQC ID only `1-5429824686`.
