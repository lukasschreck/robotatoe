import type { Daten, DataStatus } from "./types.ts";

export type BadgeStatus = DataStatus | "abgeloest";

export const BADGE_ORDER: BadgeStatus[] = [
  "entschieden",
  "aktiv",
  "freigabe",
  "inarbeit",
  "geplant",
  "vorschlag",
  "laeuft",
  "offen",
  "abgeloest",
];

export const STATUS_LABEL: Record<BadgeStatus, string> = {
  entschieden: "entschieden",
  aktiv: "aktiv",
  freigabe: "wartet auf Freigabe",
  inarbeit: "in Arbeit",
  geplant: "geplant",
  vorschlag: "Vorschlag",
  laeuft: "läuft",
  offen: "offen",
  abgeloest: "abgelöst",
};

export function badgeText(status: BadgeStatus, text?: string): string {
  if (text && text.length > 0) return text;
  return STATUS_LABEL[status];
}

function emptyCounts(): Record<BadgeStatus, number> {
  return {
    entschieden: 0,
    aktiv: 0,
    freigabe: 0,
    inarbeit: 0,
    geplant: 0,
    vorschlag: 0,
    laeuft: 0,
    offen: 0,
    abgeloest: 0,
  };
}

// Zählt jede Status-Markierung, die die Seite rendert. Phasen haben in den
// Daten kein Statusfeld und werden wie in der Vorlage als „läuft“ gezeigt.
export function countBadges(source: Daten): Record<BadgeStatus, number> {
  const counts = emptyCounts();
  const add = (status?: BadgeStatus) => {
    if (status) counts[status] += 1;
  };

  for (const phase of source.phasen) {
    add("laeuft");
    for (const task of phase.aufgaben) add(task.status);
  }
  add(source.phase4.status);
  add(source.phase4.cfo?.status);
  add(source.landing.status);
  add(source.positionierung.status);
  add(source.abstimmung.status);
  add(source.leitlinie.status);
  add(source.zielkunde.status);
  add(source.preise.status);
  for (const rival of source.wettbewerb) {
    if (rival.vorschlag) add("vorschlag");
  }
  add("vorschlag");
  add(source.usp.status);
  add(source.mvp.status);
  add(source.mvp.regelStatus);
  add(source.tech.status);
  add(source.architektur.status);
  for (const point of source.agenda.punkte) add(point.status);
  for (const name of source.namen) add(name.status);
  add(source.kommunikation.status);
  add(source.mission.status);
  add(source.orgStatus.status);
  for (const person of source.org) {
    for (const sub of person.subbots) add(sub.status);
  }
  add(source.spielregeln.status);
  for (const decision of source.entscheidungen) add(decision.status);
  counts.offen += source.fragen.length;
  counts.abgeloest += source.archiv.length;
  return counts;
}
