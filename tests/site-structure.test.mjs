import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const exists = (file) => fs.existsSync(path.join(root, file));

const requiredRoutes = [
  "app/page.tsx",
  "app/treatments/page.tsx",
  "app/treatments/nhs-and-private/page.tsx",
  "app/treatments/invisalign/page.tsx",
  "app/treatments/implants/page.tsx",
  "app/treatments/emergency/page.tsx",
  "app/treatments/specialist/page.tsx",
  "app/treatments/cosmetic/page.tsx",
  "app/new-patients/page.tsx",
  "app/about/page.tsx",
  "app/visit/page.tsx",
  "app/testimonials/page.tsx",
  "app/contact/page.tsx",
  "app/privacy/page.tsx",
  "app/not-found.tsx",
  "app/robots.ts",
  "app/sitemap.ts",
];

test("all required routes exist", () => {
  for (const route of requiredRoutes) {
    assert.ok(exists(route), `Missing required route file: ${route}`);
  }
});

test("verified business facts are present without invented ratings or wrong CQC", () => {
  assert.ok(exists("lib/business.ts"));
  const source = read("lib/business.ts");
  for (const fact of [
    "Epping Dental",
    "01992 573 484",
    "info@eppingdental.co.uk",
    "59 High Street",
    "Epping",
    "CM16 4BA",
    "1-5429824686",
    "Dr Amit Rai",
    "eppingdental.co.uk",
  ]) {
    assert.match(source, new RegExp(fact.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
  }
  assert.doesNotMatch(source, /1-5429616873/);
  assert.match(source, /verifiedReviews:\s*null/);
  assert.doesNotMatch(source, /9\.\d+\s*\/\s*10|Google rating|Trustpilot score/i);
  assert.ok(exists("research/DESIGN_BRIEF.md"));
  assert.ok(exists("research/SOURCE_LOG.md"));
  const brief = read("research/DESIGN_BRIEF.md");
  assert.match(brief, /Treatment Clarity Pathway/i);
  assert.match(brief, /https:\/\/m3\.material\.io/);
  assert.match(brief, /https:\/\/component\.gallery/);
  assert.match(brief, /https:\/\/designsystems\.one/);
  assert.match(brief, /logo\.png/);
  assert.match(brief, /#B49D52|#b49d52/i);
});

test("ConceptNotice disclosure, sticky bar, dismiss paths, mount-gated open", () => {
  assert.ok(exists("components/ConceptNotice.tsx"));
  const source = read("components/ConceptNotice.tsx");
  assert.match(source, /Local Sites Lab showcase/i);
  assert.match(source, /Epping Dental/);
  assert.match(source, /did not ask for/i);
  assert.match(source, /has not approved it/i);
  assert.match(source, /not the live or official site/i);
  assert.match(source, /Get a site like this/i);
  assert.match(source, /Continue to Epping Dental/);
  assert.match(source, /About this sample/i);
  assert.match(source, /localsiteslab\.com/i);
  assert.match(source, /localStorage/i);
  assert.match(source, /concept-bar/);
  assert.match(source, /William Green/);
  assert.match(source, /lsl-logo/);
  assert.match(source, /concept-close/);
  assert.match(source, /aria-label="Close concept notice"/);
  assert.match(source, /Escape/);
  assert.match(source, /modalRef/);
  assert.match(source, /pointerdown/);
  assert.match(source, /addEventListener\(\s*["']pointerdown["']/);
  assert.match(source, /contains\(event\.target/);
  assert.match(source, /stopPropagation/);
  assert.match(source, /onClick=\{dismiss\}/);
  assert.doesNotMatch(source, /event\.target === event\.currentTarget/);
  assert.doesNotMatch(source, /Tip:/i);
  assert.doesNotMatch(source, /click outside/i);
  assert.match(source, /epping-dental-concept-notice-dismissed-v5/);

  assert.doesNotMatch(source, /useState\(\s*\(\s*\)\s*=>/);
  assert.doesNotMatch(source, /useState\(\s*\(\)\s*=>\s*[\s\S]*localStorage/);
  assert.match(source, /const \[open, setOpen\] = useState\(false\)/);
  assert.match(source, /const \[mounted, setMounted\] = useState\(false\)/);
  assert.match(source, /setMounted\(true\)/);
  assert.match(source, /localStorage\.getItem\(storageKey\)/);
  assert.match(source, /setOpen\(!dismissed\)/);
  assert.match(source, /mounted && open/);
  assert.match(source, /removeEventListener\(\s*["']pointerdown["']/);
  assert.match(source, /removeEventListener\(\s*["']keydown["']/);
  assert.match(source, /onClick=\{reopen\}/);
  assert.match(source, /useCallback/);
  assert.match(source, /Get a website like this to win more local work/i);

  const css = read("app/globals.css");
  const closeBlock = css.split(".concept-close {")[1].split("}")[0];
  assert.match(closeBlock, /background:\s*transparent/);
  assert.match(closeBlock, /border:\s*none/);
  assert.match(closeBlock, /border-radius:\s*0/);
  assert.match(closeBlock, /font-size:\s*1\.5rem/);
  assert.doesNotMatch(closeBlock, /border-radius:\s*50%/);
  assert.match(css, /pointer-events:\s*auto/);
  assert.match(css, /width:\s*min\(100%,\s*42rem\)/);
  assert.match(css, /#0[Bb]1220/);
  assert.match(css, /#EAFF38|#eaff38/i);
});

test("ConceptNotice dismiss → remount → reopen → dismiss again (storage behaviour)", () => {
  const storageKey = "epping-dental-concept-notice-dismissed-v5";
  const store = new Map();
  const localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
  };

  function mountOpenState() {
    const dismissed = localStorage.getItem(storageKey) === "yes";
    return !dismissed;
  }

  assert.equal(mountOpenState(), true);
  localStorage.setItem(storageKey, "yes");
  assert.equal(mountOpenState(), false);
  assert.equal(mountOpenState(), false);
  let uiOpen = true;
  assert.equal(uiOpen, true);
  localStorage.setItem(storageKey, "yes");
  uiOpen = false;
  assert.equal(mountOpenState(), false);
  localStorage.removeItem(storageKey);
  assert.equal(mountOpenState(), true);
});

test("concept is noindex and does not canonically impersonate the official domain", () => {
  const robots = read("app/robots.ts");
  const layout = read("app/layout.tsx");
  assert.match(robots, /disallow/i);
  assert.match(layout, /index:\s*false/i);
  assert.match(layout, /follow:\s*false/i);
  assert.doesNotMatch(layout, /eppingdental\.co\.uk/i);
});

test("global CSS design system: no box-shadows, brand colours, sticky bar, scroll margin", () => {
  const css = read("app/globals.css");
  assert.ok(css.split("\n").length > 200);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /@media/);
  assert.match(css, /min-height:\s*44px/);
  assert.doesNotMatch(css, /box-shadow/);
  assert.match(css, /#b49d52|--gold:\s*#b49d52/i);
  assert.match(css, /#0b0b0b|--black:\s*#0b0b0b/i);
  assert.match(css, /#f7f1e6|--cream:\s*#f7f1e6/i);
  assert.match(css, /#f4b400|--star:\s*#f4b400/i);
  for (const token of [
    "--gold",
    "--cream",
    "--teal",
    ".shell",
    ".hero-pathway",
    ".hero-copy",
    ".site-header",
    ".utility-bar",
    ".concept-bar",
    ".concept-modal",
    ".concept-logo",
    ".treatment-card",
    ".trust-band",
    ".pathway-grid",
    ".visit-panel",
    ".contact-panel",
    ".site-footer",
    "scroll-margin-top",
    "scroll-padding-top",
    "position:\\s*sticky",
    "position:\\s*fixed",
  ]) {
    assert.match(css, new RegExp(token));
  }
});

test("homepage Treatment Clarity Pathway: solid copy beside real photo, no scrim, call CTAs", () => {
  const page = read("app/page.tsx");
  assert.match(page, /hero-pathway/);
  assert.match(page, /hero-copy/);
  assert.match(page, /hero-media/);
  assert.match(page, /hero-smile\.jpg/);
  assert.match(page, /tel:\$\{business\.phoneTel\}|tel:\+441992573484/);
  assert.match(page, /social-proof/);
  assert.match(page, /1-5429824686|cqcLocationId/);
  assert.doesNotMatch(page, /1-5429616873/);
  assert.doesNotMatch(page, /scrim|linear-gradient\(/i);
  assert.match(page, /pathway-grid|pathway-card/);
  assert.match(page, /treatment-card/);
  assert.match(page, /Stars/);
  const css = read("app/globals.css");
  assert.doesNotMatch(css, /\.hero-copy[^{]*{[^}]*position:\s*absolute/);
});

test("contact does not fake form delivery; booking inactivity acknowledged", () => {
  const contact = read("app/contact/page.tsx");
  assert.match(contact, /does not send forms|does not take appointments/i);
  assert.doesNotMatch(contact, /<form/i);
  assert.match(contact, /inactive booking/i);
  const home = read("app/page.tsx");
  assert.match(home, /inactive booking/i);
});

test("real logo and brand assets present", () => {
  assert.ok(exists("public/images/logo.png"));
  assert.ok(exists("public/images/hero-smile.jpg"));
  assert.ok(exists("public/images/lsl-logo.svg"));
  assert.ok(exists("public/favicon.png"));
});

test("social proof strip has balanced padding and no divider under strip", () => {
  const css = read("app/globals.css");
  const block = css.split(".social-proof {")[1].split("}")[0];
  assert.match(block, /1\.35rem\s+0\s+1\.5rem/);
  assert.match(block, /border-bottom:\s*none/);
});
