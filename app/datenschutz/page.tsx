import Link from "next/link";

export default function DatenschutzPage() {
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
        <p className="kicker">Privacy Policy</p>
        <h1>Datenschutz</h1>
        <p>
          Informationen darüber, wie personenbezogene Daten auf dieser Website
          verarbeitet werden.
        </p>
      </section>

      <section className="legal-content">
        <article className="legal-card">
          <h2>1. Verantwortlicher</h2>

          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>

          <p>
            <strong>Pineel Studios</strong>
            <br />
            Raphael Gmeiner
            E-Mail:{" "}
            <a href="mailto:raphael@pineelstudios.com">
              raphael@pineelstudios.com
            </a>
          </p>
        </article>

        <article className="legal-card">
          <h2>2. Allgemeine Hinweise</h2>

          <p>
            Beim Besuch dieser Website können personenbezogene Daten verarbeitet
            werden. Personenbezogene Daten sind Informationen, mit denen eine
            Person direkt oder indirekt identifiziert werden kann, zum Beispiel
            IP-Adressen, technische Zugriffsdaten oder freiwillig übermittelte
            Kontaktinformationen.
          </p>
        </article>

        <article className="legal-card">
          <h2>3. Hosting</h2>

          <p>
            Diese Website wird über Vercel bereitgestellt. Beim Aufruf der
            Website können technisch notwendige Daten verarbeitet werden,
            beispielsweise IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene
            Seiten und technische Informationen zum verwendeten Browser.
          </p>

          <p>
            Diese Verarbeitung dient der technischen Bereitstellung,
            Stabilität und Sicherheit der Website.
          </p>
        </article>

        <article className="legal-card">
          <h2>4. Kontaktaufnahme per E-Mail</h2>

          <p>
            Wenn Sie per E-Mail Kontakt aufnehmen, werden die von Ihnen
            übermittelten Daten verarbeitet, um Ihre Anfrage zu beantworten.
            Dazu können insbesondere Name, E-Mail-Adresse, Inhalt der Nachricht
            und technische Kommunikationsdaten gehören.
          </p>

          <p>
            Diese Daten werden nicht ohne Einwilligung an Dritte weitergegeben,
            sofern keine gesetzliche Verpflichtung besteht.
          </p>
        </article>

        <article className="legal-card">
          <h2>5. Cookies und Tracking</h2>

          <p>
            Diese Website verwendet derzeit keine bewusst eingebundenen
            Marketing- oder Tracking-Tools wie Google Analytics, Meta Pixel oder
            vergleichbare Dienste.
          </p>

          <p>
            Sollten zukünftig Analyse- oder Marketingdienste eingebunden werden,
            wird diese Datenschutzerklärung entsprechend aktualisiert.
          </p>
        </article>

        <article className="legal-card">
          <h2>6. Externe Links</h2>

          <p>
            Diese Website kann Links zu externen Websites enthalten. Für die
            Datenverarbeitung auf externen Websites ist der jeweilige Betreiber
            verantwortlich.
          </p>
        </article>

        <article className="legal-card">
          <h2>7. Rechte betroffener Personen</h2>

          <p>
            Sie haben im Rahmen der gesetzlichen Voraussetzungen Rechte auf
            Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch gegen die Verarbeitung
            personenbezogener Daten.
          </p>

          <p>
            Zur Ausübung dieser Rechte genügt eine Nachricht an:
            <br />
            <a href="mailto:raphael@pineelstudios.com">
              raphael@pineelstudios.com
            </a>
          </p>
        </article>

        <article className="legal-card">
          <h2>8. Beschwerderecht</h2>

          <p>
            Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
            personenbezogenen Daten gegen Datenschutzrecht verstößt, können Sie
            sich bei der zuständigen Datenschutzaufsichtsbehörde beschweren.
          </p>
        </article>

        <article className="legal-card">
          <h2>9. Stand dieser Datenschutzerklärung</h2>

          <p>Stand: Mai 2026</p>
        </article>
      </section>
    </main>
  );
}