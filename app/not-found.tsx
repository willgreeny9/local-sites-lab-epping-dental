import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="shell prose">
        <h1>Page not found</h1>
        <p>
          That page is not part of this Epping Dental concept site. Return home or call the
          practice on{" "}
          <a href="tel:+441992573484">01992 573 484</a>.
        </p>
        <p>
          <Link className="button button-gold" href="/">
            Back to home
          </Link>
        </p>
      </div>
    </section>
  );
}
