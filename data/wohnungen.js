/* =====================================================================
   DATEN ALLER WOHNUNGEN
   ---------------------------------------------------------------------
   So fügst du eine neue Wohnung hinzu:
   1. Bilder in einen neuen Ordner unter bilder/<id>/ legen
      (z. B. bilder/rs1-eg/)
   2. Unten im WOHNUNGEN-Array einen neuen Eintrag anhängen
      (am einfachsten den bestehenden RS5-DG-Block kopieren und Werte
      anpassen).
   3. Fertig. Die Übersichtsseite und die Detailseite ziehen sich die
      Daten automatisch aus dieser Datei.

   Felder, die optional sind, dürfen einfach weggelassen oder leer
   gelassen werden ("" oder []).
   "status" steuert die Anzeige:
     "verfügbar"  → wird auf der Startseite angezeigt
     "reserviert" → wird angezeigt mit Hinweis
     "vermietet"  → erscheint nicht als Angebot, kann aber im Archiv
                    aufgerufen werden
   ===================================================================== */

const HAEUSER = [
  {
    id: "rs1",
    adresse: "Reichsdorfstraße 1",
    plz: "97526",
    ort: "Sennfeld",
    beschreibung: "Mehrfamilienhaus im Neubaugebiet Rempertshag, 97526 Sennfeld bei Schweinfurt – Innenstadt in 5 Minuten erreichbar."
  },
  {
    id: "rs3",
    adresse: "Reichsdorfstraße 3",
    plz: "97526",
    ort: "Sennfeld",
    beschreibung: "Mehrfamilienhaus im Neubaugebiet Rempertshag, 97526 Sennfeld bei Schweinfurt – Innenstadt in 5 Minuten erreichbar."
  },
  {
    id: "rs5",
    adresse: "Reichsdorfstraße 5",
    plz: "97526",
    ort: "Sennfeld",
    beschreibung: "6-Familienhaus in 97526 Sennfeld bei Schweinfurt, Baujahr 2011 – massiv nach aktueller EnEV mit Gas-Brennwert und Solar-Unterstützung."
  }
];

const WOHNUNGEN = [
  /* ------------------------------------------------------------------
     WOHNUNG 1 — Reichsdorfstraße 5, Dachgeschoss-Maisonette
     ------------------------------------------------------------------ */
  {
    id: "rs5-dg",                 // URL-Slug (kein Leerzeichen, klein)
    hausId: "rs5",                // verweist auf HAEUSER oben
    status: "verfügbar",          // verfügbar | reserviert | vermietet

    titel: "Neuwertige Maisonette-Wohnung im Dachgeschoss",
    untertitel: "Exklusiv · hell · 4 Zimmer · 103 m² · Südbalkon · Neubaugebiet Rempertshag",
    objektNr: "OM-394629",
    quelleUrl: "https://www.ohne-makler.net/immobilie/394629/",

    // Eckdaten
    wohnflaeche: 103,
    zimmer: 4,
    schlafzimmer: 1,
    badezimmer: 1,
    etage: "2. OG (DG, Maisonette über 2 Etagen)",
    baujahr: 2011,
    zustand: "Neuwertig",

    // Kosten (€/Monat sofern nicht anders vermerkt)
    kaltmiete: 1220,
    nebenkosten: 100,
    heizkosten: 150,
    stellplatz: 40,
    stellplaetze: 1,
    kaution: 3660,

    verfuegbarAb: "01.05.2026",

    // Technik
    heizung: "Zentralheizung",
    energietraeger: "Gas",
    energieausweisTyp: "Bedarfsausweis",
    energieausweisDatum: "bis 30. April 2014",
    endenergiebedarf: "58,00 kWh/(m²·a)",

    // Lage-Koordinaten (für Karte)
    lat: 50.0325,
    lon: 10.2750,

    // Texte
    beschreibung: `In sehr guter Wohnlage befindet sich die Wohnung im Dachgeschoss über 2 Etagen in einem 6-Familienwohnhaus im Neubaugebiet „Rempertshag", Reichsdorfstraße 5 in Sennfeld. Die Wohnung überzeugt durch eine durchdachte Raumaufteilung, helle Zimmer, einen sonnigen Südbalkon sowie zahlreiche Ausstattungsdetails, die modernen Wohnkomfort bieten.`,

    ausstattung: `Das Haus wurde massiv nach der neuesten EnEV und den Schallschutzvorschriften erstellt. Moderne Gasbrennwerttechnik und heizungsunterstützende Solarkollektoren sorgen für niedrige Verbrauchskosten. Das nach Süden ausgerichtete Wohn-/Essbereich mit Fliesen im Kochbereich und hochwertigem Echtholzparkett ist außergewöhnlich hell. Das Schlafzimmer liegt angenehm ruhig. Das moderne Tageslichtbad bietet eine großzügige Badewanne (1,80 × 0,80 m), Dusche, Fußbodenheizung und Handtuchwärmer. Im Kinderzimmer, Studio und Wohnzimmer befinden sich zusätzliche Anschlüsse für Fernsehen und Internet/Telefon. Im Schlafzimmer ist ebenfalls Fernsehanschluss vorhanden. Das Studio ist frei gestaltbar (z. B. Wohnen, Kinder, Schlafen, Arbeiten). Zur Wohnung gehört ein geräumiger Abstellraum im Keller mit Stromversorgung sowie ein gemeinsamer Waschmaschinen- und Trocknerraum. Der Südbalkon misst 2,30 × 3,25 m (7,48 m²). Abschließbare Fahrradständer im Außenbereich können angemietet werden.`,

    lage: `Sennfeld ist eine traditionsreiche und moderne fränkische Gemeinde im Schweinfurter Mainbogen mit etwa 4.800 Einwohnern. Das Neubaugebiet „Rempertshag" liegt neben dem Baugebiet „Flachsleite". Einkaufsmöglichkeiten aller Art finden Sie in wenigen hundert Metern Entfernung (Sennfeld oder Schweinfurt-Hafen). Mit dem Stadtbus (Haltestelle in 100 m Entfernung) oder zu Fuß gelangen Sie bequem in wenigen Minuten zur Schweinfurter Innenstadt. Direkt gegenüber befinden sich ein Ärztezentrum mit Apotheke sowie eine E-Ladesäule.`,

    highlights: [
      "Maisonette über 2 Etagen mit Wendeltreppe ins Studio",
      "Sonniger Südbalkon (7,48 m²)",
      "Hochwertiges Echtholzparkett im Wohnbereich",
      "Tageslichtbad mit XL-Badewanne, Dusche & Fußbodenheizung",
      "Gasbrennwert + heizungsunterstützende Solarkollektoren",
      "Massivbauweise nach aktueller EnEV",
      "TV-/Internet-Anschlüsse in mehreren Räumen",
      "Kellerabteil mit Strom",
      "Gemeinschaftlicher Waschmaschinen-/Trocknerraum",
      "1 Stellplatz inklusive (Pflicht-Anmietung)",
      "Fußboden: Parkett, Laminat, Fliesen"
    ],

    hinweise: [
      { titel: "Küche",       text: "Kann vom Vormieter für 1.500 € abgelöst werden." },
      { titel: "Stellplätze", text: "2 PKW-Stellplätze à 40 € sind verpflichtend anzumieten." },
      { titel: "Tierhaltung", text: "Nicht gestattet." }
    ],

    infrastruktur: [
      "Apotheke", "Lebensmittel-Discount", "Allgemeinmediziner",
      "Kindergarten", "Grundschule", "Hauptschule", "Gesamtschule",
      "Öffentliche Verkehrsmittel", "Familien-Schwimmbad", "Badesee",
      "E-Ladesäule", "Kinderspielplatz"
    ],

    // Galerie — erstes Bild ist auch das Titelbild auf der Übersicht
    bilder: [
      { src: "bilder/rs5-dg/bild-004-007.jpg", caption: "Außenansicht" },
      { src: "bilder/rs5-dg/bild-007-014.jpg", caption: "Wohn-/Essbereich" },
      { src: "bilder/rs5-dg/bild-014-028.jpg", caption: "Wohnen" },
      { src: "bilder/rs5-dg/bild-004-008.jpg", caption: "Küche" },
      { src: "bilder/rs5-dg/bild-005-009.jpg", caption: "Diele / Wendeltreppe" },
      { src: "bilder/rs5-dg/bild-011-022.jpg", caption: "Diele" },
      { src: "bilder/rs5-dg/bild-009-018.jpg", caption: "Wendeltreppe" },
      { src: "bilder/rs5-dg/bild-005-010.jpg", caption: "Studio – Einrichtungsvorschlag" },
      { src: "bilder/rs5-dg/bild-007-015.jpg", caption: "Studio" },
      { src: "bilder/rs5-dg/bild-008-016.jpg", caption: "Studio" },
      { src: "bilder/rs5-dg/bild-010-020.jpg", caption: "Studio" },
      { src: "bilder/rs5-dg/bild-009-019.jpg", caption: "Schlafzimmer" },
      { src: "bilder/rs5-dg/bild-012-024.jpg", caption: "Schlafzimmer" },
      { src: "bilder/rs5-dg/bild-008-017.jpg", caption: "Kinderzimmer" },
      { src: "bilder/rs5-dg/bild-011-023.jpg", caption: "Kinderzimmer" },
      { src: "bilder/rs5-dg/bild-013-026.jpg", caption: "Kinderzimmer" },
      { src: "bilder/rs5-dg/bild-006-011.jpg", caption: "Bad – Waschbecken" },
      { src: "bilder/rs5-dg/bild-006-012.jpg", caption: "Bad – Dusche" },
      { src: "bilder/rs5-dg/bild-006-013.jpg", caption: "Bad – Badewanne" },
      { src: "bilder/rs5-dg/bild-010-021.jpg", caption: "Bad" },
      { src: "bilder/rs5-dg/bild-012-025.jpg", caption: "Bad" },
      { src: "bilder/rs5-dg/bild-013-027.jpg", caption: "Südbalkon (7,48 m²)" },
      { src: "bilder/rs5-dg/bild-015-029.jpg", caption: "Grundriss Dachgeschoss" },
      { src: "bilder/rs5-dg/bild-016-030.jpg", caption: "Grundriss Studio" }
    ]
  }

  /* ------------------------------------------------------------------
     VORLAGE — neue Wohnung hier einfügen (Komma nach dem Block oben
     nicht vergessen!) und Werte anpassen:

  ,{
    id: "rs1-eg",
    hausId: "rs1",
    status: "verfügbar",
    titel: "...",
    untertitel: "...",
    objektNr: "",
    wohnflaeche: 0,
    zimmer: 0,
    etage: "",
    baujahr: 0,
    zustand: "",
    kaltmiete: 0, nebenkosten: 0, heizkosten: 0, stellplatz: 0, kaution: 0,
    verfuegbarAb: "",
    heizung: "", energietraeger: "",
    energieausweisTyp: "", energieausweisDatum: "", endenergiebedarf: "",
    lat: 50.0325, lon: 10.2750,
    beschreibung: "...",
    ausstattung: "...",
    lage: "",
    highlights: [ "..." ],
    hinweise: [ { titel: "", text: "" } ],
    infrastruktur: [ "..." ],
    bilder: [
      { src: "bilder/rs1-eg/01.jpg", caption: "Außenansicht" }
    ]
  }
     ------------------------------------------------------------------ */
];

// Zentraler Kontakt — wird auf allen Seiten verwendet
const KONTAKT = {
  name: "Frank Sauer",
  telefon: "09722 4548",
  telefonE164: "+4997224548"
};
