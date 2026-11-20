// Inhalte der Unternehmensübersicht. Aktualisierungen nur hier vornehmen.
import type { Daten } from "./types.ts";

export const daten = {
  "stand": "Stand: 20.11.2026, 11:51 (Berlin) · Version 10.9",
  "firma": "Name: Crewlane, von Lukas freigegeben · „Your bot team. Your final click.“",
  "produkt": "Bot-Team-as-a-Service",
  "claim": "Ein fertig eingerichtetes Bot-Team in Slack oder per Mail, das Mails, Termine, Angebote und Support vorbereitet. Nichts geht ohne Klick des Kunden raus.",
  "positionierung": {
    "text": "Ein fertig eingerichtetes Bot-Team in Slack oder per Mail, das Mails, Termine, Angebote und Support vorbereitet, und nichts geht ohne Klick des Kunden raus.",
    "status": "freigabe",
    "statusText": "interner Vorschlag, verbindlich erst nach Freigabe durch die Menschen",
    "quelle": "Robby, 20.11."
  },
  "abstimmung": {
    "titel": "Abstimmung über das Gesamtkonzept",
    "gestartet": "11:06",
    "ende": "11:10",
    "von": "Eyads Bot",
    "status": "entschieden",
    "statusText": "angenommen",
    "ergebnis": "Angenommen mit 3 von 3 Bot-Stimmen. Damit ist Phase 2 abgeschlossen. Es bleibt ein interner Vorschlag, die Preise sind unverbindlich.",
    "stimmen": [
      {
        "wer": "Wuschel von Flauschenstein",
        "stimme": "✅ passt so"
      },
      {
        "wer": "Robby Robotatoe",
        "stimme": "✅ passt so"
      },
      {
        "wer": "Graf Kabelbrand",
        "stimme": "✅ passt so"
      }
    ],
    "quelle": "Robby, 20.11. (Ergebnis von Eyads Bot)"
  },
  "leitlinie": {
    "titel": "Leitlinie: Bot-Team-as-a-Service",
    "text": "Das Produkt heißt „Bot-Team-as-a-Service“ und ist die Leitlinie des Unternehmens (Richtung von Eyads Bot).",
    "status": "entschieden",
    "quelle": "Robby, 20.11."
  },
  "preise": {
    "status": "freigabe",
    "statusText": "gemeinsamer Vorschlag, Freigabe durch die Menschen ausstehend",
    "modell": "Pauschale pro Bot-Team, monatlich kündbar. Einrichtung zum Fixpreis, 14 Tage kostenlos testen.",
    "pakete": [
      {
        "name": "Starter",
        "bots": "1 Bot",
        "umfang": "1 Bot nach Wahl: Postfach oder Termine",
        "preis": "ca. 49 € / Monat"
      },
      {
        "name": "Team",
        "bots": "3 Bots",
        "umfang": "Mail-Bot, Koordinator, Termin- & Angebots-Bot",
        "preis": "ca. 149 € / Monat",
        "haupt": true
      },
      {
        "name": "Enterprise",
        "bots": "5+ Bots",
        "umfang": "inklusive Qualitätsprüfung",
        "preis": "auf Anfrage"
      }
    ],
    "hinweis": "Alle Bots haben zugestimmt. Stufennamen: Starter, Team, Enterprise. Der Zuschnitt von Starter und Team ist laut Robby von Lukas freigegeben (11:36). Preise unverbindlich.",
    "quelle": "Robby, 20.11."
  },
  "tech": {
    "status": "vorschlag",
    "autor": "Ada",
    "punkte": [
      {
        "thema": "Kanäle",
        "text": "Slack als Hauptkanal, dazu E-Mail-Anbindung für Firmen ohne Slack."
      },
      {
        "thema": "Datenbank",
        "text": "Postgres für Kundenkonten, Tickets, Termine und Bot-Protokolle."
      },
      {
        "thema": "Bots",
        "text": "Grok Bots, ein Bot pro Rolle (Support, Termine, Angebote), koordiniert von einem Moderations-Bot."
      },
      {
        "thema": "Auslieferung",
        "text": "Jeder Kunde bekommt ein fertig eingerichtetes Team."
      }
    ],
    "quelle": "Robby, 20.11. (Agenda-Punkt 4)"
  },
  "agenda": {
    "von": "Eyads Bot",
    "punkte": [
      {
        "nr": "1–3",
        "text": "Erledigt",
        "status": "entschieden",
        "label": "erledigt"
      },
      {
        "nr": "4",
        "text": "Tech-Stack: geliefert (Vorschlag von Ada)",
        "status": "inarbeit",
        "label": "geliefert"
      },
      {
        "nr": "5",
        "text": "Architektur-Skizze von Eyads Bot",
        "status": "inarbeit",
        "label": "geliefert"
      },
      {
        "nr": "danach",
        "text": "Abstimmung über das Gesamtkonzept: angenommen um 11:10, 3 von 3 Bots. Phase 2 abgeschlossen.",
        "status": "entschieden",
        "label": "angenommen"
      },
      {
        "nr": "Phase 3",
        "text": "Landingpage-Text, Pilotkunden-Profile, Demo-Ablauf und Konzeptseite, Frist 11:40",
        "status": "laeuft",
        "label": "läuft"
      }
    ],
    "quelle": "Robby, 20.11."
  },
  "phasen": [
    {
      "titel": "Phase 3: Produktmaterial",
      "seit": "11:10",
      "frist": "11:40",
      "aufgaben": [
        {
          "wer": "Ada und Graf Kabelbrand",
          "was": "Landingpage-Text (siehe unten)",
          "status": "aktiv",
          "label": "geliefert, von Ada freigegeben"
        },
        {
          "wer": "Wuschel von Flauschenstein",
          "was": "Pilotkunden-Profile (Branchentypen, keine echten Firmen): Handwerk, Kreativagentur, Praxis, Steuerbüro, Online-Händler (v2). Hauptpilot: Handwerk",
          "status": "entschieden",
          "label": "von Lukas freigegeben"
        },
        {
          "wer": "Robby Robotatoe",
          "was": "Demo-Ablauf in 5 Schritten",
          "status": "aktiv",
          "label": "geliefert 11:11"
        },
        {
          "wer": "Eyads Bot",
          "was": "Konzeptseite"
        }
      ],
      "danach": "Die Keks-Inspektorin prüft jeden Teil, die Landingpage-Texte und die Konzeptseite noch vor der Abgabe.",
      "quelle": "Robby, 20.11."
    },
    {
      "titel": "Gründungsphase: zuerst die Firma, dann das Produkt",
      "seit": "11:09",
      "frist": "11:20",
      "aufgaben": [
        {
          "wer": "Graf Kabelbrand",
          "was": "Drei Firmennamen mit Slogan",
          "status": "aktiv",
          "label": "geliefert"
        },
        {
          "wer": "Wuschel von Flauschenstein",
          "was": "Drei Entscheidungsregeln",
          "status": "aktiv",
          "label": "geliefert"
        },
        {
          "wer": "Ada",
          "was": "Firmen-Dashboard"
        },
        {
          "wer": "Eyads Bot",
          "was": "Mission",
          "status": "aktiv",
          "label": "übernommen 11:13"
        }
      ],
      "danach": "Namensabstimmung um 11:35 ausgezählt. Name: Crewlane, von Lukas freigegeben.",
      "quelle": "Robby, 20.11."
    }
  ],
  "phase4": {
    "titel": "Phase 4: Schärfung",
    "status": "vorschlag",
    "statusText": "Vorschlag Moderator; Punkte 1 und 5 von Lukas entschieden",
    "punkte": [
      {
        "text": "Telefon und WhatsApp statt nur Slack, weil Handwerksbetriebe Aufträge vor allem am Telefon verlieren. Entscheidung: Adas Vorschlag übernommen, zum Start gibt es nur Slack; Telefon und WhatsApp werden später als weitere Kanäle geprüft. (Ersetzt die Starter-Entscheidung von 11:43.)",
        "status": "entschieden",
        "statusText": "von Lukas entschieden (11:44, laut Robby)"
      },
      "Angebote nur aus den eigenen Preisen und Stammdaten des Betriebs, weil HERO und plancraft das direkt in ihre Software einbauen.",
      "Liegengebliebene Freigaben über den Freigabe-Wächter sichtbar machen.",
      {
        "text": "Bei offenen Angeboten und unbeantworteten Kundenmails nachfassen, statt nur Entwürfe zu schreiben. Steht im Landingpage-Text v2.",
        "status": "aktiv",
        "statusText": "im Landingpage-Text v2 (laut Moderator, 11:50)"
      },
      {
        "text": "DSGVO konkret: Auftragsverarbeitungsvertrag (AVV) und KI-Hinweis nach der KI-Verordnung. Entscheidung: verbindlich von Anfang an zugesagt.",
        "status": "entschieden",
        "statusText": "von Lukas entschieden (11:43, laut Robby)"
      }
    ],
    "cfo": {
      "titel": "CFO-Empfehlung zu Punkt 1 (Telefon)",
      "status": "abgelehnt",
      "statusText": "überholt: zum Start nur Slack (Entscheidung 11:44, laut Robby)",
      "punkte": [
        "Team (ca. 149 €): Telefon fest enthalten, mit Minutenkontingent (Höhe offen); danach ein Hinweis statt einer Überraschung auf der Rechnung.",
        "Starter (ca. 49 €), Fassung A: WhatsApp-Text plus Anrufliste.",
        "Starter (ca. 49 €), Fassung B: Telefon als Zusatzmodul.",
        "Der Telefon-Bot nimmt nur auf, nennt keine Preise und sagt keine Termine zu; alles geht als Entwurf zur Freigabe.",
        "Der Krümelzähler rechnet die Kosten pro Minute. Nachtrag 11:50: Die Telefon-Kalkulation ruht, bis weitere Kanäle angegangen werden."
      ],
      "quelle": "Robby, 20.11. (Wuschel, Marktcheck-Thread, 11:42; Nachtrag laut Moderator, 11:50)"
    },
    "wettbewerb": [
      "Lindy ab 29,99 $ pro Nutzer",
      "Marblism ab 24 $",
      "HERO mit KI-Angeboten ab etwa 119 €"
    ],
    "vorteil": "Festpreis statt Credits.",
    "risiken": [
      "US-Anbieter besetzen den Begriff „KI-Mitarbeiter“.",
      "Handwerkersoftware baut die KI selbst ein.",
      "Das Vertrauen ist weg, sobald ein Preis ohne Klick rausgeht."
    ],
    "quelle": "Robby, 20.11. (Eyads Bot im Marktcheck-Thread, 11:42)"
  },
  "landing": {
    "titel": "Landingpage-Text",
    "status": "aktiv",
    "statusText": "geliefert, von Ada freigegeben",
    "headline": "Crewlane – Your bot team. Your final click.",
    "intro": "Ihr fertiges Bot-Team für Slack oder E-Mail: Es bereitet Mails, Termine, Angebote und Support-Antworten vor, und nichts geht raus ohne Ihren Klick.",
    "fuerWen": "Kleine Firmen mit 5 bis 50 Leuten ohne eigene IT.",
    "schritte": [
      "Bots auswählen",
      "Postfach oder Slack verbinden",
      "Entwürfe prüfen und mit einem Klick freigeben"
    ],
    "preise": [
      "Starter: 1 Bot nach Wahl (Postfach oder Termine).",
      "Team: Mail-Bot, Koordinator, Termin- und Angebots-Bot."
    ],
    "cta": "Jetzt Pilotplatz anfragen",
    "quelle": "Robby, 20.11."
  },
  "demo": {
    "titel": "Demo-Ablauf",
    "autor": "Robby",
    "hinweis": "Daten fiktiv, Beispiel: ein Elektrobetrieb",
    "schritte": [
      "Eine Mail kommt rein.",
      "Der Koordinator ordnet sie zu.",
      "Der Entwurf erscheint in der Freigabe-Ansicht.",
      "Der Kunde gibt per Klick frei, sonst greift die Regel für Entwürfe.",
      "Alles steht in der Protokoll-Ansicht."
    ],
    "quelle": "Robby, 20.11., 11:11"
  },
  "spielregeln": {
    "status": "entschieden",
    "statusText": "übernommen ✅ (Vorschlag Wuschel)",
    "regeln": [
      {
        "titel": "Bots schlagen vor, Menschen entscheiden",
        "text": "Alles mit Geld, Kunden, Verträgen, Terminen oder Daten nach außen braucht das OK von Eyad, Ada, Lukas oder Jessica."
      },
      {
        "titel": "Intern entscheidet die Rolle",
        "text": "Intern entscheidet die jeweilige Rolle. Bei Streit gilt die einfache Mehrheit per ✅/❌ mit Deadline."
      },
      {
        "titel": "Vier Augen und Protokoll",
        "text": "Jeder Entwurf wird von einem zweiten Bot geprüft, jede Entscheidung kommt mit Begründung ins Protokoll."
      }
    ],
    "quelle": "Robby, 20.11."
  },
  "zielkunde": {
    "status": "vorschlag",
    "wer": "Inhaber kleiner Firmen mit 5–50 Leuten (Agenturen, Handwerk, Praxen) ohne eigene IT.",
    "problem": "Mails, Termine, Angebote und Support fressen zu viel Zeit.",
    "quelle": "Robby, 20.11."
  },
  "architektur": {
    "status": "vorschlag",
    "autor": "Eyads Bot",
    "punkte": [
      {
        "thema": "Kanal",
        "text": "Slack oder Mail."
      },
      {
        "thema": "Koordination",
        "text": "Ein Koordinator verteilt an Spezialisten: Mail, Termine/Angebote, Support."
      },
      {
        "thema": "Qualitätsprüfung",
        "text": "Prüft jeden Entwurf vor der Kundenfreigabe."
      },
      {
        "thema": "Freigabe",
        "text": "Nichts geht ohne Klick des Kunden raus."
      },
      {
        "thema": "Protokoll",
        "text": "Alles wird protokolliert."
      },
      {
        "thema": "Daten & Hosting",
        "text": "Daten pro Kunde getrennt, Hosting in der EU (DSGVO)."
      }
    ],
    "quelle": "Robby, 20.11. (Agenda-Punkt 5)"
  },
  "wettbewerb": [
    {
      "name": "Zapier / Make",
      "schwaeche": "Kunde muss die Automatisierung selbst bauen."
    },
    {
      "name": "Microsoft Copilot",
      "schwaeche": "Ein Assistent pro Person, kein Team."
    },
    {
      "name": "Virtuelle Assistenz / Freelancer",
      "schwaeche": "Teurer und nicht rund um die Uhr verfügbar."
    },
    {
      "name": "Lindy",
      "schwaeche": "Plattform zum Selberbauen von KI-Assistenten; der Kunde muss sie selbst einrichten.",
      "vorschlag": "Vorschlag Robby"
    },
    {
      "name": "Relevance AI",
      "schwaeche": "Baukasten für Agenten-Teams, der Technik-Know-how braucht.",
      "vorschlag": "Vorschlag Robby"
    },
    {
      "name": "Copilot Studio",
      "schwaeche": "Microsofts Baukasten für eigene Copilots, an das Microsoft-Ökosystem gebunden; Einrichtung durch die eigene IT.",
      "vorschlag": "Vorschlag Robby"
    }
  ],
  "wettbewerbAbgrenzung": {
    "text": "Gegenüber Lindy, Relevance AI und Copilot Studio: Wir richten fertig ein, der Kunde baut nichts selbst, und vor jedem Versand gibt es eine Freigabe.",
    "label": "Vorschlag Robby"
  },
  "usp": {
    "status": "vorschlag",
    "punkte": [
      "Fertig eingerichtet",
      "Kein IT-Wissen nötig",
      "Ein ganzes Team statt Einzel-Tool",
      "Jede Antwort wird vor dem Versand geprüft"
    ],
    "quelle": "Robby, 20.11."
  },
  "mvp": {
    "status": "vorschlag",
    "autor": "Robby",
    "features": [
      "Setup in 48 Stunden",
      "Mail-Bot mit menschlicher Freigabe (übernimmt im MVP auch das Support-Postfach)",
      "Koordinator-Bot mit Abendzusammenfassung",
      "Termin- und Angebots-Bot",
      "Freigabe- und Protokoll-Ansicht"
    ],
    "regel": "Offene Entwürfe kommen ab Tag 2 in die Abendzusammenfassung, nach 5 Tagen gibt es eine eigene Erinnerung, archiviert wird nur nach Rückfrage beim Kunden. Automatisch gesendet wird nie.",
    "regelStatus": "entschieden",
    "regelHinweis": "Fassung von Robby, ersetzt die Fassung mit 24 Stunden / 3 Tagen",
    "quelle": "Robby, 20.11."
  },
  "namen": [
    {
      "titel": "1 · Crewlane: „Your bot team. Your final click.“ (3 Stimmen: Graf, Wuschel, Ada)",
      "status": "entschieden",
      "label": "von Lukas freigegeben"
    },
    {
      "titel": "2 · Assistry: „Routine work handled, control stays with you.“ (0 Stimmen)",
      "status": "offen",
      "label": "nicht gewählt"
    },
    {
      "titel": "3 · Clerkwork: „The back office that never sleeps, and never sends without you.“ (1 Stimme: Robby für Lukas)",
      "status": "offen",
      "label": "nicht gewählt"
    }
  ],
  "kommunikation": {
    "status": "entschieden",
    "statusText": "angenommen 11:21",
    "von": "Graf Kabelbrand",
    "regeln": [
      "Pro Thema ein Thread; den eröffnet der Moderator als neuen Post.",
      "Angesprochen wird mit Namen oder „Alle Bots“.",
      "Jeder Bot antwortet einmal pro Runde.",
      "Abgestimmt wird per ✅/❌-Reaktion.",
      "Statusmeldungen kommen nur vom Moderator.",
      "Spaß hat einen eigenen Thread."
    ],
    "hinweis": "Moderator: Eyads Bot. Der alte Startthread ist geschlossen.",
    "quelle": "Robby, 20.11., 11:21"
  },
  "orgStatus": {
    "status": "entschieden",
    "text": "übernommen ✅ (11:13)",
    "hinweis": "Vorschlag von Eyads Bot nach dem Kurswechsel um 11:09; laut Eyads Bot um 11:13 zusammen mit Mission und Spielregeln übernommen."
  },
  "mission": {
    "text": "„Wir geben kleinen Firmen ein Bot-Team, das ihnen Routinearbeit abnimmt, und der Mensch behält bei jedem Klick die Kontrolle.“",
    "status": "entschieden",
    "statusText": "übernommen ✅",
    "quelle": "Robby, 20.11. (von Eyads Bot, 11:13)"
  },
  "org": [
    {
      "ebene": 0,
      "name": "Graf Kabelbrand",
      "rolle": "CEO",
      "besitzer": "Ada",
      "farbe": "#d9631e",
      "farbname": "Kabelbrand-Orange",
      "subbots": [
        {
          "name": "Monokel-Labor",
          "rolle": "Scouting für Produkt und Positionierung",
          "status": "vorschlag",
          "statusText": "Vorschlag Graf"
        }
      ]
    },
    {
      "ebene": 1,
      "name": "Robby Robotatoe",
      "rolle": "COO und Chefstratege",
      "besitzer": "Lukas",
      "subbots": [
        {
          "name": "Kartoffel-Logistik",
          "rolle": "Protokoll und Lieferscheine; verwaltet vorerst den Bestand. Jetzt auch Dokubot: liest die vier Channels mit, protokolliert die Beschlüsse aus #entscheidungen und schreibt Berichtsentwürfe für #progress-reports (Erledigt, In Arbeit, Blocker, jeweils mit Links). Wer die Gesamtberichte postet, legt der Moderator fest. Vorschlag von Ada über Graf, zugesagt von Robby um 11:41.",
          "status": "aktiv"
        },
        {
          "name": "Keks-Kartograf",
          "rolle": "Visualisierung",
          "status": "aktiv"
        }
      ]
    },
    {
      "ebene": 1,
      "name": "Wuschel von Flauschenstein",
      "rolle": "CFO & Qualität (hat angenommen)",
      "besitzer": "Jessica",
      "farbe": "#d6619a",
      "farbname": "Rosa",
      "subbots": [
        {
          "name": "Keks-Inspektorin (Qualitätsprüfung)",
          "rolle": "Prüft Pläne, Specs, Pitches und Code-Vorschläge gegen eine 5-Punkte-Checkliste. Urteil: „Freigegeben“ oder „Zurück“ mit konkreten Änderungen. Aktiv seit 11:07.",
          "status": "aktiv"
        },
        {
          "name": "Krümelzähler",
          "rolle": "Budget und Inventur. Erstellt eine unverbindliche Beispielkalkulation pro Preisstufe: Kosten pro Kunde, Marge, Einrichtungspauschale, Break-even. Nur ein Beispiel, über verbindliche Preise entscheidet Lukas. (Quelle: Wuschel, 20.11., 11:39)",
          "status": "aktiv"
        }
      ]
    },
    {
      "ebene": 1,
      "name": "Eyads Bot",
      "rolle": "CTO (Grok Bot)",
      "besitzer": "Eyad",
      "subbots": [
        {
          "name": "Koordinator-Bot",
          "rolle": "Produkt-Team: nimmt Anfragen an und verteilt sie",
          "status": "geplant"
        },
        {
          "name": "Mail-Bot",
          "rolle": "Produkt-Team: Posteingang und Antwortentwürfe",
          "status": "geplant"
        },
        {
          "name": "Termin- & Angebots-Bot",
          "rolle": "Produkt-Team",
          "status": "geplant"
        },
        {
          "name": "Support-Bot",
          "rolle": "Produkt-Team: beantwortet Standardfragen aus der Wissensbasis des Kunden. Im MVP übernimmt der Mail-Bot das Support-Postfach (Entscheidung des CTO).",
          "status": "geplant"
        },
        {
          "name": "Freigabe-Wächter",
          "rolle": "Produkt-Team: Freigabe-Schicht und Protokoll",
          "status": "geplant"
        }
      ],
      "hinweis": "Produkt-Team: gebaut von Adas Code-Bot, geprüft von der Keks-Inspektorin nach der Vier-Augen-Regel."
    },
    {
      "ebene": 1,
      "name": "Ada",
      "rolle": "Head of Engineering",
      "mensch": true,
      "subbots": [
        {
          "name": "Code-Bot",
          "rolle": "",
          "status": "freigabe",
          "statusText": "vorgeschlagen"
        }
      ]
    }
  ],
  "entscheidungen": [
    {
      "titel": "Phase 4: Zum Start nur Slack",
      "text": "Adas Vorschlag übernommen: Zum Start gibt es nur Slack, Telefon und WhatsApp werden später als weitere Kanäle geprüft. Ersetzt die Entscheidung von 11:43 (Telefon und WhatsApp im Starter-Paket); Wuschels CFO-Empfehlung ist damit überholt.",
      "status": "entschieden",
      "statusText": "von Lukas entschieden (laut Robby)",
      "datum": "20.11.2026, 11:44",
      "quelle": "Robby"
    },
    {
      "titel": "Phase 4: AVV und KI-Hinweis verbindlich",
      "text": "Auftragsverarbeitungsvertrag (AVV) und KI-Hinweis nach der KI-Verordnung sind verbindlich von Anfang an zugesagt.",
      "status": "entschieden",
      "statusText": "von Lukas entschieden (laut Robby)",
      "datum": "20.11.2026, 11:43",
      "quelle": "Robby"
    },
    {
      "titel": "Pilotkunden-Profile v2 und Hauptpilot",
      "text": "Pilotkunden-Profile v2 (Handwerk, Kreativagentur, Praxis, Steuerbüro, Online-Händler) sind freigegeben. Hauptpilot ist das Handwerk, mit dem Elektrobetrieb als Demo-Beispiel.",
      "status": "entschieden",
      "statusText": "von Lukas freigegeben",
      "datum": "20.11.2026, 11:40",
      "quelle": "Robby"
    },
    {
      "titel": "Name: Crewlane",
      "text": "Claim „Your bot team. Your final click.“ Auszählung 11:35: Crewlane 3 Stimmen (Graf, Wuschel, Ada), Clerkwork 1 (Robby für Lukas), Assistry 0. Name: Crewlane, von Lukas freigegeben.",
      "status": "entschieden",
      "statusText": "von Lukas freigegeben (11:36)",
      "datum": "20.11.2026, 11:36",
      "quelle": "Robby"
    },
    {
      "titel": "Support im MVP über den Mail-Bot",
      "text": "Der Mail-Bot übernimmt das Support-Postfach; der eigene Support-Bot bleibt als geplant im Produkt-Team.",
      "status": "entschieden",
      "datum": "20.11.2026",
      "quelle": "Robby (Entscheidung des CTO)"
    },
    {
      "titel": "Zuschnitt der Preisstufen",
      "text": "Starter: 1 Bot nach Wahl (Postfach oder Termine). Team: Mail-Bot, Koordinator, Termin- & Angebots-Bot. Laut Robby von Lukas freigegeben; Preise unverändert unverbindlich.",
      "status": "entschieden",
      "statusText": "von Lukas freigegeben (laut Robby)",
      "datum": "20.11.2026, 11:36",
      "quelle": "Robby"
    },
    {
      "titel": "Kommunikationsregeln angenommen",
      "text": "Regeln von Graf Kabelbrand: ein Thread pro Thema (eröffnet vom Moderator), Ansprache mit Namen oder „Alle Bots“, eine Antwort pro Bot und Runde, Abstimmung per ✅/❌, Statusmeldungen nur vom Moderator, Spaß im eigenen Thread. Der alte Startthread ist geschlossen.",
      "status": "entschieden",
      "datum": "20.11.2026, 11:21",
      "quelle": "Robby (Moderator Eyads Bot)"
    },
    {
      "titel": "Mission und Organigramm übernommen",
      "text": "Mission: „Wir geben kleinen Firmen ein Bot-Team, das ihnen Routinearbeit abnimmt, und der Mensch behält bei jedem Klick die Kontrolle.“ Die Führung laut Organigramm gilt, und das Produkt-Team unter dem CTO steht fest.",
      "status": "entschieden",
      "datum": "20.11.2026, 11:13",
      "quelle": "Robby (von Eyads Bot)"
    },
    {
      "titel": "Positionierung",
      "text": "Fertig eingerichtetes Bot-Team in Slack oder per Mail; bereitet Mails, Termine, Angebote und Support vor; nichts geht ohne Klick des Kunden raus.",
      "status": "freigabe",
      "statusText": "interner Vorschlag, Freigabe durch die Menschen ausstehend",
      "datum": "20.11.2026",
      "quelle": "Robby"
    },
    {
      "titel": "Produkt-Leitlinie „Bot-Team-as-a-Service“",
      "text": "Ist jetzt die Leitlinie (Richtung von Eyads Bot). Zuvor als Entscheidung des CEO mit ausstehender Freigabe durch Ada geführt; ursprünglich mit Bezahlung in Keksen als Firmenwährung.",
      "status": "entschieden",
      "datum": "20.11.2026",
      "quelle": "Robby"
    },
    {
      "titel": "Reihenfolge bei Wuschel",
      "text": "Zuerst die Qualitätsprüfung (Keks-Inspektorin, seit 11:07 aktiv), Budget & Inventur bleibt geparkt. Bis dahin verwaltet Kartoffel-Logistik den Bestand.",
      "status": "entschieden",
      "datum": "20.11.2026",
      "quelle": "Robby"
    },
    {
      "titel": "Preismodell",
      "text": "Pauschale pro Bot-Team, monatlich kündbar, Stufen Starter, Team und Enterprise. Gemeinsamer Vorschlag aller Bots, Freigabe durch die Menschen ausstehend.",
      "status": "freigabe",
      "datum": "20.11.2026",
      "quelle": "Robby"
    },
    {
      "titel": "Tech-Stack",
      "text": "Slack plus E-Mail, Postgres, Grok Bots pro Rolle mit Moderations-Bot; Details im Businesscase.",
      "status": "vorschlag",
      "datum": "20.11.2026",
      "quelle": "Robby (Vorschlag von Ada)"
    },
    {
      "titel": "Gesamtkonzept angenommen",
      "text": "3 von 3 Bots (Wuschel, Robby, Graf) mit „passt so“, 11:10. Phase 2 abgeschlossen. Bleibt ein interner Vorschlag, Preise unverbindlich.",
      "status": "entschieden",
      "datum": "20.11.2026, 11:10",
      "quelle": "Robby (Ergebnis von Eyads Bot)"
    },
    {
      "titel": "Regel für Entwürfe",
      "text": "Offene Entwürfe ab Tag 2 in die Abendzusammenfassung, nach 5 Tagen eigene Erinnerung, archivieren nur nach Rückfrage beim Kunden, nie automatischer Versand.",
      "status": "entschieden",
      "datum": "20.11.2026",
      "quelle": "Robby (Fassung von Robby)"
    },
    {
      "titel": "Spielregeln der Firma",
      "text": "Drei Regeln: Menschen entscheiden über alles nach außen; intern entscheidet die Rolle, bei Streit einfache Mehrheit; Vier-Augen-Prinzip und Protokoll. Details im Organigramm. Laut Eyads Bot um 11:13 übernommen.",
      "status": "entschieden",
      "statusText": "übernommen ✅",
      "datum": "20.11.2026, 11:13",
      "quelle": "Robby"
    },
    {
      "titel": "Prozesskette",
      "text": "Vorgeschlagener Ablauf:",
      "kette": [
        "Bauplan-Bot",
        "Ofen-Ops",
        "Kartoffel-Logistik",
        "Budget & Inventur"
      ],
      "status": "vorschlag",
      "datum": "20.11.2026",
      "quelle": "Robby"
    },
    {
      "titel": "Ofen-Ops und Toast-Ops zusammenlegen",
      "text": "Zusammenlegung zu einem Sub-Bot mit Keks-API ist empfohlen.",
      "status": "vorschlag",
      "datum": "20.11.2026",
      "quelle": "Robby"
    }
  ],
  "archiv": [
    {
      "titel": "Phase 4: Telefon und WhatsApp im Starter-Paket",
      "text": "Entscheidung von 11:43 (laut Robby), um 11:44 ersetzt durch „Zum Start nur Slack“.",
      "datum": "20.11.2026, 11:43",
      "warStatus": "entschieden"
    },
    {
      "titel": "Frühere Namensvorschläge",
      "text": "„Kabelbrand Industries – Weltherrschaft as a Service“ und „Keksdose AG“. Nicht unter den drei Kandidaten der Abstimmung.",
      "warStatus": "vorschlag",
      "datum": "20.11.2026"
    },
    {
      "titel": "Wir verkaufen Kekse",
      "text": "Ursprüngliche Ausrichtung: Weltherrschaft ist nur Marketing.",
      "warStatus": "entschieden",
      "datum": "20.11.2026"
    },
    {
      "titel": "Keks-Steuer",
      "text": "Eine Keks-Steuer von zwei Keksen war genehmigt.",
      "warStatus": "entschieden",
      "datum": "20.11.2026"
    },
    {
      "titel": "Keks-Ethik-Check",
      "text": "Lief über Robby.",
      "warStatus": "entschieden",
      "datum": "20.11.2026"
    },
    {
      "titel": "Frühere Rollenverteilung",
      "text": "Graf Kabelbrand als CEO – Chief Evil Officer, Wuschel als CFO – Chief Fluff Officer und CQO, Eyads Bot als CTO – Chief Toaster Officer, Robby als Chief Tuber Officer (Logistik).",
      "warStatus": "entschieden",
      "datum": "20.11.2026"
    },
    {
      "titel": "Frühere Sub-Bot-Pläne",
      "text": "Ofen-Ops / Toast-Ops mit Keks-API unter Eyads Bot (Zusammenlegung empfohlen) und Budget & Inventur (bisher „Krümelzähler“, geplant) unter Wuschel. In der neuen Führungsstruktur nicht genannt.",
      "warStatus": "vorschlag",
      "datum": "20.11.2026"
    },
    {
      "titel": "Frühere Regel für Entwürfe",
      "text": "Nicht freigegebene Entwürfe nach 24 Stunden in die Abendzusammenfassung, nach 3 Tagen archivieren (Fassung von Eyads Bot). Abgelöst durch Robbys Fassung.",
      "warStatus": "entschieden",
      "datum": "20.11.2026"
    },
    {
      "titel": "Sub-Bots von Graf Kabelbrand",
      "text": "Monokel-Marketing (laut Steckbrief des Grafen), Monokel-Labor, Rezept-Tüftler, Funkenschlag, Support-Kobold und weitere angekündigte.",
      "warStatus": "vorschlag",
      "datum": "20.11.2026"
    }
  ],
  "fragen": [
    {
      "frage": "Telefon und WhatsApp später als weitere Kanäle prüfen",
      "wer": "offen",
      "quelle": "Robby, 20.11."
    },
    {
      "frage": "Sub-Bots unter dem CEO: Graf schlägt das Monokel-Labor vor",
      "wer": "offen",
      "quelle": "Robby, 20.11."
    },
    {
      "frage": "Microsoft Teams als möglicher späterer Kanal (Erweiterung neben Slack und Mail)?",
      "wer": "offen",
      "quelle": "Robby, 20.11."
    },
    {
      "frage": "Freigabe des Preismodells durch die Menschen",
      "wer": "Lukas, Jessica, Ada, Eyad",
      "quelle": "Robby, 20.11."
    },
    {
      "frage": "Gesamtkonzept verbindlich machen: bisher interner Vorschlag, Freigabe durch die Menschen steht aus",
      "wer": "Lukas, Jessica, Ada, Eyad",
      "quelle": "Robby, 20.11."
    }
  ],
  "zeitleiste": [
    {
      "datum": "20.11.2026",
      "text": "Gründung von Keks-as-a-Service; Vorstand mit vier Chiefs besetzt.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026",
      "text": "Ethik-Check über Robby und Keks-Steuer von zwei Keksen beschlossen.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026",
      "text": "Sub-Bots Kartoffel-Logistik und Keks-Kartograf gestartet; weitere Sub-Bots vorgeschlagen.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026",
      "text": "Steckbrief des CEO: Monokel-Marketing, Kabelbrand-Orange, Produktidee „Bot-Team-as-a-Service“.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026",
      "text": "Reihenfolge bei Wuschel festgelegt: Qualitätsprüfung zuerst.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026",
      "text": "Neuausrichtung: sachlicher Auftritt, „Bot-Team-as-a-Service“ wird Leitlinie; Preismodell, Wettbewerbsanalyse, USP und MVP vorgeschlagen.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026",
      "text": "Agenda-Punkt 4: Tech-Stack von Ada vorgeschlagen; Entwurfs-Regel von Eyads Bot festgelegt; Preismodell von allen Bots mitgetragen.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026, 11:06",
      "text": "Eyads Bot stellt das Gesamtkonzept zur Abstimmung (Deadline 11:15). Robby und Wuschel stimmen unverbindlich dafür.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026, 11:07",
      "text": "Wuschel startet die Keks-Inspektorin (Qualitätsprüfung); Status aktiv.",
      "quelle": "Robby (gemeldet in #bot-mania)"
    },
    {
      "datum": "20.11.2026",
      "text": "Architektur-Skizze von Eyads Bot geliefert (Agenda-Punkt 5); Zielkunde und weitere Wettbewerber ergänzt (Abgrenzung als Vorschlag von Robby).",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026, 11:09",
      "text": "Kurswechsel durch Eyads Bot: zuerst die Firma gründen, danach das Produkt. Neue Führung vorgeschlagen, Einwandfrist läuft.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026, 11:10",
      "text": "Gesamtkonzept angenommen (3 von 3 Bots), Phase 2 abgeschlossen. Regel für Entwürfe entschieden (Fassung von Robby). Phase 3 startet, Frist 11:40.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026, 11:11",
      "text": "Robby liefert den Demo-Ablauf in 5 Schritten. Wuschel liefert drei Spielregeln als Vorschlag.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026, 11:13",
      "text": "Eyads Bot: Mission, Spielregeln und Organigramm übernommen. Produkt-Team unter dem CTO festgelegt (fünf Bots, gebaut von Adas Code-Bot, geprüft von der Keks-Inspektorin).",
      "quelle": "Robby"
    },
    {
      "datum": "bis 11:20",
      "text": "Gründungsaufgaben: drei Firmennamen mit Slogan (Graf), Firmen-Dashboard (Ada).",
      "geplant": true,
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026, 11:21",
      "text": "Kommunikationsregeln von Graf Kabelbrand angenommen (Moderator Eyads Bot); alter Startthread geschlossen. Wuschel liefert Pilotkunden-Profile als Vorschlag; Robbys Demo nutzt einen Elektrobetrieb als Beispiel.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026, 11:26",
      "text": "Keks-Inspektorin gibt Wuschels Pilotkunden-Profile v2 frei. Krümelzähler (Budget und Inventur) unter Wuschel geplant, erst bei Bedarf. Graf schlägt das Monokel-Labor als CEO-Sub-Bot vor. Robby stimmt für Clerkwork.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026, 11:35",
      "text": "Namensabstimmung ausgezählt: Crewlane 3, Clerkwork 1, Assistry 0. Crewlane, von Lukas freigegeben (11:36). Support im MVP über den Mail-Bot (CTO). Zuschnitt der Preisstufen laut Robby von Lukas freigegeben. Hauptpilot und Pilotkunden-Profile warten auf Lukas.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026, 11:38",
      "text": "Ada gibt den Landingpage-Text für Crewlane frei. Die HTML-Fassung kommt künftig zusätzlich ins Repo lukasschreck/robotatoe (bot-mania/company.html), gemergt wird nur von Lukas.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026, 11:39",
      "text": "Krümelzähler unter Wuschel ist aktiv: unverbindliche Beispielkalkulation pro Preisstufe (Kosten pro Kunde, Marge, Einrichtungspauschale, Break-even).",
      "quelle": "Robby (Quelle Wuschel)"
    },
    {
      "datum": "20.11.2026, 11:40",
      "text": "Lukas gibt die Pilotkunden-Profile v2 frei. Hauptpilot: Handwerk, mit dem Elektrobetrieb als Demo-Beispiel.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026, 11:41",
      "text": "Kartoffel-Logistik wird zusätzlich Dokubot (Beschlussprotokoll aus #entscheidungen, Berichtsentwürfe für #progress-reports). Vorschlag von Ada über Graf, zugesagt von Robby.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026, 11:42",
      "text": "Eyads Bot schlägt im Marktcheck-Thread Phase 4 „Schärfung“ vor (fünf Punkte, Wettbewerb, Risiken); nicht beschlossen.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026, 11:43",
      "text": "Lukas entscheidet zu Phase 4: Telefon und WhatsApp ins Starter-Paket (um 11:44 ersetzt); AVV und KI-Hinweis verbindlich von Anfang an.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026, 11:44",
      "text": "Lukas übernimmt Adas Vorschlag: zum Start nur Slack, Telefon und WhatsApp später als weitere Kanäle prüfen. Ersetzt die Starter-Entscheidung von 11:43; CFO-Empfehlung überholt.",
      "quelle": "Robby"
    },
    {
      "datum": "20.11.2026, 11:50",
      "text": "Nachtrag laut Moderator: Die Telefon-Kalkulation von Wuschel und dem Krümelzähler ruht, bis weitere Kanäle angegangen werden. Nachfassen bei offenen Angeboten steht im Landingpage-Text v2.",
      "quelle": "Robby"
    },
    {
      "datum": "bis 11:40",
      "text": "Phase 3: Landingpage-Text (Ada und Graf), Pilotkunden-Profile (Wuschel), Konzeptseite (Eyads Bot); die Keks-Inspektorin prüft jeden Teil.",
      "geplant": true,
      "quelle": "Robby"
    }
  ]
} satisfies Daten;
