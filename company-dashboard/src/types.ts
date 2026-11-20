export type DataStatus =
  | "entschieden"
  | "aktiv"
  | "freigabe"
  | "inarbeit"
  | "geplant"
  | "vorschlag"
  | "laeuft"
  | "offen";

export interface Positionierung {
  text: string;
  status: DataStatus;
  statusText: string;
  quelle: string;
}

export interface Stimme {
  wer: string;
  stimme: string;
}

export interface Abstimmung {
  titel: string;
  gestartet: string;
  ende: string;
  von: string;
  status: DataStatus;
  statusText: string;
  ergebnis: string;
  stimmen: Stimme[];
  quelle: string;
}

export interface Leitlinie {
  titel: string;
  text: string;
  status: DataStatus;
  quelle: string;
}

export interface Paket {
  name: string;
  bots: string;
  umfang: string;
  preis: string;
  haupt?: boolean;
}

export interface Preise {
  status: DataStatus;
  statusText: string;
  modell: string;
  pakete: Paket[];
  hinweis: string;
  quelle: string;
}

export interface Punkt {
  thema: string;
  text: string;
}

export interface Tech {
  status: DataStatus;
  autor: string;
  punkte: Punkt[];
  quelle: string;
}

export interface AgendaPunkt {
  nr: string;
  text: string;
  status: DataStatus;
  label: string;
}

export interface Agenda {
  von: string;
  punkte: AgendaPunkt[];
  quelle: string;
}

export interface Aufgabe {
  wer: string;
  was: string;
  status?: DataStatus;
  label?: string;
}

export interface Phase {
  titel: string;
  seit: string;
  frist: string;
  aufgaben: Aufgabe[];
  danach: string;
  quelle: string;
}

export interface CfoEmpfehlung {
  titel: string;
  status: DataStatus;
  statusText: string;
  punkte: string[];
  quelle: string;
}

export interface Phase4 {
  titel: string;
  status: DataStatus;
  statusText: string;
  punkte: string[];
  cfo?: CfoEmpfehlung;
  wettbewerb: string[];
  vorteil: string;
  risiken: string[];
  quelle: string;
}

export interface Landing {
  titel: string;
  status: DataStatus;
  statusText: string;
  headline: string;
  intro: string;
  fuerWen: string;
  schritte: string[];
  preise: string[];
  cta: string;
  quelle: string;
}

export interface Demo {
  titel: string;
  autor: string;
  hinweis: string;
  schritte: string[];
  quelle: string;
}

export interface Regel {
  titel: string;
  text: string;
}

export interface Spielregeln {
  status: DataStatus;
  statusText: string;
  regeln: Regel[];
  quelle: string;
}

export interface Zielkunde {
  status: DataStatus;
  wer: string;
  problem: string;
  quelle: string;
}

export interface Architektur {
  status: DataStatus;
  autor: string;
  punkte: Punkt[];
  quelle: string;
}

export interface Wettbewerber {
  name: string;
  schwaeche: string;
  vorschlag?: string;
}

export interface WettbewerbAbgrenzung {
  text: string;
  label: string;
}

export interface Usp {
  status: DataStatus;
  punkte: string[];
  quelle: string;
}

export interface Mvp {
  status: DataStatus;
  autor: string;
  features: string[];
  regel: string;
  regelStatus: DataStatus;
  regelHinweis: string;
  quelle: string;
}

export interface Namensvorschlag {
  titel: string;
  status: DataStatus;
  label?: string;
}

export interface Kommunikation {
  status: DataStatus;
  statusText: string;
  von: string;
  regeln: string[];
  hinweis: string;
  quelle: string;
}

export interface OrgStatus {
  status: DataStatus;
  text: string;
  hinweis: string;
}

export interface Mission {
  text: string;
  status: DataStatus;
  statusText: string;
  quelle: string;
}

export interface SubBot {
  name: string;
  rolle: string;
  status: DataStatus;
  statusText?: string;
}

export interface OrgPerson {
  ebene: number;
  name: string;
  rolle: string;
  besitzer?: string;
  farbe?: string;
  farbname?: string;
  subbots: SubBot[];
  hinweis?: string;
  mensch?: boolean;
}

export interface Entscheidung {
  titel: string;
  text: string;
  status: DataStatus;
  datum: string;
  quelle: string;
  statusText?: string;
  kette?: string[];
}

export interface ArchivEintrag {
  titel: string;
  text: string;
  warStatus: DataStatus;
  datum: string;
}

export interface Frage {
  frage: string;
  wer: string;
  quelle: string;
}

export interface Ereignis {
  datum: string;
  text: string;
  quelle: string;
  geplant?: boolean;
}

export interface Daten {
  stand: string;
  firma: string;
  produkt: string;
  claim: string;
  positionierung: Positionierung;
  abstimmung: Abstimmung;
  leitlinie: Leitlinie;
  preise: Preise;
  tech: Tech;
  agenda: Agenda;
  phasen: Phase[];
  phase4: Phase4;
  landing: Landing;
  demo: Demo;
  spielregeln: Spielregeln;
  zielkunde: Zielkunde;
  architektur: Architektur;
  wettbewerb: Wettbewerber[];
  wettbewerbAbgrenzung: WettbewerbAbgrenzung;
  usp: Usp;
  mvp: Mvp;
  namen: Namensvorschlag[];
  kommunikation: Kommunikation;
  orgStatus: OrgStatus;
  mission: Mission;
  org: OrgPerson[];
  entscheidungen: Entscheidung[];
  archiv: ArchivEintrag[];
  fragen: Frage[];
  zeitleiste: Ereignis[];
}
