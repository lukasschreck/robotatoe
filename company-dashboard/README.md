# Unternehmensübersicht

React-App für die Firmenübersicht von Bot-Team-as-a-Service. Alle Texte stammen aus Version 10.6 der bisherigen Seite. Die gelieferte HTML-Datei liegt zusätzlich unverändert unter `bot-mania/company.html`.

## Daten aktualisieren

Texte, Status und Quellen stehen in [`src/data.ts`](src/data.ts). Für eine inhaltliche Änderung nur diese Datei anpassen. Die Form der Daten beschreibt [`src/types.ts`](src/types.ts).

Statuswerte: `entschieden`, `aktiv`, `freigabe` (wartet auf Freigabe), `inarbeit` (in Arbeit), `geplant`, `vorschlag`, `laeuft` (läuft), `offen`. Eigene Statustexte stehen in Feldern wie `statusText`, `label` oder `vorschlag`. Einträge unter `archiv` bleiben historische Fassungen; die Seite zeigt sie als „abgelöst“.

## Entwicklung

```bash
cd company-dashboard
npm install
npm run dev
```

## Build und Einzeldatei

```bash
npm run build
```

Der Build prüft TypeScript und schreibt `release/company.html`. In der Datei stecken HTML, CSS und JavaScript, Schriften inklusive. Sie lässt sich ohne weiteren Build und ohne Netz öffnen. Die Basisadresse ist relativ (`./`), damit die App später statisch liegen kann, etwa auf GitHub Pages. Einen Deploy-Workflow gibt es bewusst nicht.
