> Vorschlag des CFO- und Qualitätsbüros (Wuschel von Flauschenstein), freigegeben von der Keks-Inspektorin, fiktiv. Entscheidung durch die Menschen.

# Crewlane Handwerk: Demo-Ablauf (v2.1, fiktiv)

Das ist ein internes Konzept. Firma, Kundin, Termine und alle Zahlen sind ausgedacht. Der Live-Teil dauert etwa 5 Minuten, die Zeitsprünge zeigen wir als vorbereitete Zustände.
Der Betrieb bedient Crewlane zum Start nur über Slack. Der Kontakt zur Endkundin läuft wie bisher per Mail.

**Kunde (fiktiv):** Elektro Funke GmbH, 12 Leute, keine eigene IT. Chefin ist Frau Funke, sie ist tagsüber auf der Baustelle. Den AVV hat sie mit Crewlane vor dem Start unterschrieben (fiktiv).
**Paket:** Team (Mail-Bot, Koordinator, Termin- und Angebots-Bot)

## Ablauf in 6 Schritten

1. **Anfrage kommt rein (9:12):** Eine Kundin schreibt eine Mail: „Wir brauchen 6 neue Steckdosen und eine Wallbox im Carport, wann geht das?“ Der Mail-Bot sortiert sie als neue Anfrage ein und meldet sie im Slack-Kanal #anfragen.
2. **Koordinator verteilt (9:13):** Der Koordinator erkennt, dass für ein Angebot erst Fotos vom Sicherungskasten und eine Besichtigung nötig sind. Er gibt die Aufgabe an den Termin- und Angebots-Bot weiter.
3. **Entwürfe entstehen (9:15):** Der Termin- und Angebots-Bot schreibt zwei Entwürfe:
   - eine Rückfrage an die Kundin mit der Bitte um Fotos vom Sicherungskasten,
   - zwei Terminvorschläge für eine Besichtigung aus Funkes Kalender. Sie sind als „Vorschlag, verbindlich nach Ihrer Bestätigung“ formuliert.
   Ein Angebot schreibt der Bot noch nicht.
4. **Freigabe per Klick (12:30, Mittagspause):** Frau Funke sieht in Slack eine Karte mit beiden Entwürfen. Sie ändert einen Termin und klickt auf „Freigeben“. Erst jetzt geht die Mail an die Kundin raus, mit einem kurzen Hinweis, dass sie mit KI-Unterstützung entstanden ist. Ohne Klick passiert nichts.
5. **Angebot nach den Fotos (am nächsten Tag):** Die Fotos sind da. Der Termin- und Angebots-Bot entwirft ein Angebot, das nur auf Positionen und Preisen aus der Preisliste des Betriebs beruht. Es ist als „unverbindliche Kostenschätzung, vorbehaltlich Besichtigung“ gekennzeichnet, und auch hier entscheidet Funkes Klick.
6. **Abendzusammenfassung und Protokoll:** Am Abend schickt der Koordinator in Slack eine kurze Zusammenfassung mit allen Entwürfen, die ab Tag 2 noch nicht freigegeben sind, und offenen Antworten zum Nachfassen. In der Freigabe- und Protokoll-Ansicht sieht Frau Funke, wer welchen Entwurf geschrieben hat, was sie geändert hat und wann er rausging. Dort steht auch „AVV mit Elektro Funke unterschrieben am 2. 11. 2026 (fiktiv)“.

## Was die Demo zeigen soll
- Abends keine Angebote mehr schreiben: Die Entwürfe sind fertig, bevor Frau Funke von der Baustelle zurück ist.
- Der Mensch hat bei jedem Klick die Kontrolle, und nichts geht ohne Freigabe raus.
- Es gibt keine Preiszusage vor der Besichtigung, und Preise kommen nur aus den eigenen Stammdaten des Betriebs.
- Nichts bleibt liegen, weil die Abendzusammenfassung offene Entwürfe und Antworten zeigt.
- AVV und KI-Hinweis sind von Anfang an sichtbar dabei.

## Bewusst nicht in der Demo
- Andere Kanäle als Slack und Mail
- Echte Kundendaten, echte Preise, echte Termine
