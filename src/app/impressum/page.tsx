import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Impressum — Dexena",
  robots: { index: false, follow: false },
};

export default function Impressum() {
  return (
    <LegalPage title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        dexena GmbH
        <br />
        Sonnenstraße 6
        <br />
        89358 Kammeltal
        <br />
        Deutschland
      </p>

      <h2>Vertreten durch</h2>
      <p>Geschäftsführer: Simon Rothermel</p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href="tel:+491722873781">+49 172 2873781</a>
        <br />
        E-Mail: <a href="mailto:info@dexena.com">info@dexena.com</a>
      </p>

      <h2>Registereintrag</h2>
      <p>
        Eintragung im Handelsregister
        <br />
        Registergericht: Amtsgericht Memmingen
        <br />
        Registernummer: HRB 20209
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        <br />
        DE356962805
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        Simon Rothermel
        <br />
        Sonnenstraße 6, 89358 Kammeltal
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
        10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
        oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
        forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
    </LegalPage>
  );
}
