/**
 * Verified public facts for Epping Dental.
 * Sources mapped in research/SOURCE_LOG.md — never invent.
 */

export const business = {
  name: "Epping Dental",
  slug: "epping-dental",
  tagline: "NHS and private dental care on Epping High Street.",
  sourceUrl: "https://www.eppingdental.co.uk/",
  phoneDisplay: "01992 573 484",
  phoneTel: "+441992573484",
  email: "info@eppingdental.co.uk",
  address: {
    line1: "59 High Street",
    locality: "Epping",
    region: "Essex",
    postcode: "CM16 4BA",
    country: "GB",
  },
  addressDisplay: "59 High Street, Epping, Essex CM16 4BA",
  mapsUrl:
    "https://www.google.com/maps/place/Epping+Dental/@51.6966205,0.1073166,17z",
  facebookUrl: "https://www.facebook.com/nhseppingdental/",
  instagramUrl: "https://www.instagram.com/eppingdentist/?hl=en-gb",
  gdcUrl: "https://www.gdc-uk.org/",
  nhsUrl: "https://www.nhs.uk/services/dentist/epping-dental/XV012391",
  /** Verified CQC location for Epping Dental */
  cqcLocationId: "1-5429824686",
  cqcUrl: "https://www.cqc.org.uk/location/1-5429824686",
  cqcInspectionSummaryUrl:
    "https://www.cqc.org.uk/location/1-5429824686/inspection-summary",
  cqcReportPublished: "18 December 2024",
  provider: "Dr Amit Rai",
  primaryCta: "Call the practice",
  secondaryCta: "Email the practice",
  /** No verified public platform review aggregate found — do not invent ratings. */
  verifiedReviews: null as null,
  serviceArea: "Epping High Street and local residents (as stated on the current site).",
  stationNote: "Nearest station: Epping Station (about 5–10 minutes’ walk).",
  busRoutes: "213, 213C and 383",
  parkingNote:
    "Free parking in designated bays outside the practice. Free in Tesco car park if you shop there (as stated on the current site).",
  accessibilityNote: "Disability access with a ramp (as stated on the current site).",
  treatmentRooms: "3 treatment rooms (stated in the CQC assessment summary).",
} as const;

export const hours = [
  { day: "Monday", time: "8:30am – 5:30pm" },
  { day: "Tuesday", time: "8:30am – 7:30pm" },
  { day: "Wednesday", time: "8:30am – 5:30pm" },
  { day: "Thursday", time: "8:30am – 7:30pm" },
  { day: "Friday", time: "8:30am – 5:30pm" },
  { day: "Saturday", time: "8:30am – 1:00pm" },
] as const;

export const cqcSummary = {
  title: "CQC regulations met",
  detail:
    "On-site announced assessment on 27 September 2024. The practice had met regulations across Safe, Effective, Caring, Responsive and Well-led. Report published 18 December 2024.",
  domains: ["Safe", "Effective", "Caring", "Responsive", "Well-led"] as const,
  sourceUrl: "https://www.cqc.org.uk/location/1-5429824686",
} as const;

export const newPatientNotes = [
  "A small team providing NHS and private dental care.",
  "Always taking on new patients, although NHS books may close from time to time when demand is high.",
  "For the most up-to-date price list, visit or call the practice.",
] as const;

export const pathwaySteps = [
  {
    title: "Call or email",
    detail:
      "Speak to the practice on 01992 573 484 or email info@eppingdental.co.uk to ask about NHS or private availability.",
  },
  {
    title: "Visit the High Street",
    detail:
      "The practice is at 59 High Street, Epping — an oasis of calm with ramp access and nearby parking.",
  },
  {
    title: "Discuss your treatment",
    detail:
      "Talk through NHS or private options — from routine care and hygiene to Invisalign, implants and emergency help.",
  },
] as const;

export type TreatmentGroup = {
  id: string;
  title: string;
  summary: string;
  items: string[];
  href: string;
};

export const treatmentGroups: TreatmentGroup[] = [
  {
    id: "nhs-private",
    title: "NHS & private care",
    summary:
      "Quality, affordable NHS and private dental care for local residents, with clear options discussed at the practice.",
    items: ["NHS Dentistry", "General dentistry", "Dental Hygiene"],
    href: "/treatments/nhs-and-private",
  },
  {
    id: "invisalign",
    title: "Invisalign & orthodontics",
    summary:
      "Invisalign and orthodontic options are promoted on the practice site, including a free Invisalign consultation pathway.",
    items: [
      "Invisalign & Orthodontics",
      "Free Invisalign consultation (as promoted)",
      "Tooth contouring (promoted with consult offers)",
    ],
    href: "/treatments/invisalign",
  },
  {
    id: "implants",
    title: "Dental implants",
    summary:
      "Dental implants are listed among the practice’s promoted treatments for replacing missing teeth.",
    items: ["Dental Implants"],
    href: "/treatments/implants",
  },
  {
    id: "emergency",
    title: "Emergency care",
    summary:
      "Help for dental emergencies during surgery hours — investigate discomfort and provide necessary first-stage treatment.",
    items: [
      "Treatment for pain",
      "Fractured teeth",
      "Trauma and swelling",
      "Crown, veneer or bridge re-cementation or repair",
      "First stage root canal treatment",
    ],
    href: "/treatments/emergency",
  },
  {
    id: "specialist",
    title: "Specialist & restorative",
    summary:
      "Treatments listed include endodontics, periodontics, extractions & oral surgery, and E-Max crowns & veneers.",
    items: [
      "Endodontics",
      "Periodontics",
      "Extractions & oral surgery",
      "E-Max Crowns & Veneers",
    ],
    href: "/treatments/specialist",
  },
  {
    id: "cosmetic",
    title: "Cosmetic & smile care",
    summary:
      "Cosmetic options listed on the practice site include tooth whitening, smile makeover and facial aesthetics.",
    items: ["Cosmetic", "Tooth Whitening", "Smile Makeover", "Facial Aesthetics"],
    href: "/treatments/cosmetic",
  },
] as const;

export const patientQuotes = [
  {
    quote:
      "Few people can claim that their visits to the dentist are enjoyable, but mine to you were. Thank you for looking after my teeth so well…",
    attribution: "Patient (published on the practice website)",
    sourceUrl: "https://www.eppingdental.co.uk/",
  },
  {
    quote:
      "Customer care is very much a primary consideration of the entire workforce. Good communication and genuine caring attitude are the hallmarks of the service of this outstanding practice…",
    attribution: "Patient (published on the practice website)",
    sourceUrl: "https://www.eppingdental.co.uk/treatments.htm",
  },
  {
    quote: "Excellent dentists",
    attribution: "Online patient feedback summarised by CQC",
    sourceUrl:
      "https://www.cqc.org.uk/location/1-5429824686/inspection-summary",
  },
  {
    quote: "Amazing staff",
    attribution: "Online patient feedback summarised by CQC",
    sourceUrl:
      "https://www.cqc.org.uk/location/1-5429824686/inspection-summary",
  },
  {
    quote: "Kind and friendly staff",
    attribution: "Online patient feedback summarised by CQC",
    sourceUrl:
      "https://www.cqc.org.uk/location/1-5429824686/inspection-summary",
  },
  {
    quote: "Staff made me feel comfortable",
    attribution: "Online patient feedback summarised by CQC",
    sourceUrl:
      "https://www.cqc.org.uk/location/1-5429824686/inspection-summary",
  },
  {
    quote: "Pain free treatment",
    attribution: "Online patient feedback summarised by CQC",
    sourceUrl:
      "https://www.cqc.org.uk/location/1-5429824686/inspection-summary",
  },
] as const;

export const freeConsultOffers = [
  "Discount on Invisalign",
  "Free tooth whitening",
  "Free AI dental monitoring",
  "Free tooth contouring",
] as const;

export const trustPoints = [
  {
    title: "CQC-registered location",
    detail:
      "Epping Dental at 59 High Street is registered with the Care Quality Commission (location 1-5429824686), provided and run by Dr Amit Rai.",
  },
  {
    title: "NHS and private",
    detail:
      "The practice provides NHS and private dental care and treatment for adults and children (CQC assessment summary).",
  },
  {
    title: "Accessible High Street practice",
    detail:
      "Ramp access, nearby parking including disabled spaces near the practice, and Epping Station a short walk away.",
  },
  {
    title: "Patient safety culture",
    detail:
      "The Patient Charter sets out infection prevention, sterilisation, safeguarding and continuous improvement commitments.",
  },
] as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/treatments", label: "Treatments" },
  { href: "/new-patients", label: "New patients" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
  { href: "/testimonials", label: "Patient voice" },
  { href: "/contact", label: "Contact" },
] as const;
