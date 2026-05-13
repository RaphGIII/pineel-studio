import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <div className="legal-bg" aria-hidden="true" />

      <nav className="legal-nav">
        <Link href="/" className="brand">
          <span className="brand-mark">P</span>
          <span className="brand-name">PINEEL STUDIOS</span>
        </Link>

        <Link href="/" className="legal-back">
          Zurück zur Startseite
        </Link>
      </nav>

      <section className="legal-hero">
        <p className="kicker">Legal Notice</p>
        <h1>Impressum</h1>
        <p>
          Rechtliche Angaben und Anbieterinformationen zu Pineel Studios.
        </p>
      </section>

      <section className="legal-content">
        <article className="legal-card">
          <h2>Angaben zum Anbieter</h2>

          <p>
            <strong>Pineel Studios</strong>
            <br />
                      Raphael Gmeiner
          </p>

          <p>
            <strong>Kontakt</strong>
            <br />
            E-Mail:{" "}
            <a href="mailto:raphael@pineelstudios.com">
              raphael@pineelstudios.com
            </a>
          </p>
        </article>

        <article className="legal-card">
          <h2>Unternehmensgegenstand</h2>

          <p>
            Webdesign, digitale Gestaltung, Redesign-Konzepte und digitale
            Präsenz für Vereine, lokale Unternehmen und Marken.
          </p>
        </article>

        <article className="legal-card">
          <h2>Rechtsform und zuständige Stelle</h2>

          <p>
            Rechtsform: Einzelunternehmen
            <br />
            Zuständige Behörde: Bezirkshauptmannschaft Bregenz AT
            <br />
            UID-Nummer: ATU82432002
          </p>
        </article>

        <article className="legal-card">
          <h2>Medieninhaber</h2>

          <p>
            Raphael Gmeiner
          </p>

          <p>
            <strong>Blattlinie</strong>
            <br />
            Diese Website dient der Präsentation von Pineel Studios, der
            Darstellung ausgewählter Design- und Webkonzepte sowie der
            Kontaktaufnahme mit potenziellen Kunden.
          </p>
        </article>

        <article className="legal-card">
          <h2>Haftung für Inhalte</h2>

          <p>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
            erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
            Inhalte wird jedoch keine Gewähr übernommen.
          </p>
        </article>

        <article className="legal-card">
          <h2>Urheberrecht</h2>

          <p>
            Die auf dieser Website veröffentlichten Inhalte, Designs und
            visuellen Konzepte unterliegen dem Urheberrecht. Jede nicht
            ausdrücklich erlaubte Nutzung, Vervielfältigung oder Bearbeitung
            bedarf der vorherigen schriftlichen Zustimmung.
          </p>
        </article>
      </section>
    </main>
  );
}