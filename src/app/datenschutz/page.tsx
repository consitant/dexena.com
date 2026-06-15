import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Datenschutz — Dexena",
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <h2>1. Datenschutz auf einen Blick</h2>
      <p>
        Diese Website befindet sich derzeit im Aufbau. Es werden keine über das
        technisch notwendige Maß hinausgehenden personenbezogenen Daten erhoben.
        Beim Aufruf der Seite werden durch unseren Hosting-Anbieter automatisch
        Server-Logfiles (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs)
        verarbeitet, die für den sicheren und stabilen Betrieb erforderlich sind.
      </p>

      <h2>2. Verantwortliche Stelle</h2>
      <p>
        dexena GmbH
        <br />
        Sonnenstraße 6, 89358 Kammeltal
        <br />
        Telefon: <a href="tel:+491722873781">+49 172 2873781</a>
        <br />
        E-Mail: <a href="mailto:info@dexena.com">info@dexena.com</a>
      </p>

      <h2>3. Hosting</h2>
      <p>
        Diese Website wird bei Vercel Inc. gehostet. Beim Besuch der Website
        werden technische Zugriffsdaten verarbeitet. Weitere Informationen finden
        Sie in der Datenschutzerklärung von Vercel:{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          vercel.com/legal/privacy-policy
        </a>
        .
      </p>

      <h2>4. Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder
        Einschränkung der Verarbeitung Ihrer gespeicherten personenbezogenen
        Daten sowie ein Widerspruchs- und Beschwerderecht bei der zuständigen
        Aufsichtsbehörde. Bitte wenden Sie sich hierzu an{" "}
        <a href="mailto:info@dexena.com">info@dexena.com</a>.
      </p>

      <p>
        {/* TODO: Bei Go-Live der Vollseite vollständige Datenschutzerklärung
            ergänzen (Cookies, Analytics, Kontaktformular, etc.). */}
        Mit dem Ausbau der Website wird diese Datenschutzerklärung entsprechend
        erweitert.
      </p>
    </LegalPage>
  );
}
