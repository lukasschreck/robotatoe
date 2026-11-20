import { Badge } from "./Badge.tsx";
import { Quelle } from "./Quelle.tsx";
import { daten } from "../data.ts";

export function BusinessCase() {
  const {
    phasen,
    phase4,
    landing,
    demo,
    positionierung,
    abstimmung,
    leitlinie,
    zielkunde,
    preise,
    wettbewerb,
    wettbewerbAbgrenzung,
    usp,
    mvp,
    tech,
    architektur,
    agenda,
    namen,
  } = daten;

  return (
    <section className="panel" id="business">
      <h2>Businesscase</h2>

      {phasen.map((phase) => (
        <article key={phase.titel} className="phase">
          <div className="block-head">
            <h3>{phase.titel}</h3>
            <Badge status="laeuft" />
          </div>
          <p className="meta-line">
            Seit {phase.seit} Uhr, Frist {phase.frist} Uhr:
          </p>
          <div className="table-wrap">
            <table className="sheet">
              <tbody>
                {phase.aufgaben.map((task) => (
                  <tr key={`${task.wer}-${task.was}`}>
                    <th scope="row">{task.wer}</th>
                    <td>
                      {task.was}
                      {task.status ? <Badge status={task.status} text={task.label} /> : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>{phase.danach}</p>
          <Quelle>{phase.quelle}</Quelle>
        </article>
      ))}

      <article className="proposal">
        <div className="block-head">
          <h3>{phase4.titel}</h3>
          <Badge status={phase4.status} text={phase4.statusText} />
        </div>
        <ol className="proposal-points">
          {phase4.punkte.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ol>
        {phase4.cfo ? (
          <aside className="cfo">
            <div className="block-head">
              <h4>{phase4.cfo.titel}</h4>
              <Badge status={phase4.cfo.status} text={phase4.cfo.statusText} />
            </div>
            <ul className="cfo-points">
              {phase4.cfo.punkte.map((point) => (
                <li
                  key={point}
                  className={
                    point.includes("Fassung A") ? "cfo-variant" : point.includes("Fassung B") ? "cfo-variant" : undefined
                  }
                >
                  {point}
                </li>
              ))}
            </ul>
            <Quelle>{phase4.cfo.quelle}</Quelle>
          </aside>
        ) : null}
        <p className="proposal-label">Wettbewerb</p>
        <ul className="proposal-market">
          {phase4.wettbewerb.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          <strong>Unser Vorteil:</strong> {phase4.vorteil}
        </p>
        <p className="proposal-label">Risiken</p>
        <ul className="proposal-risks">
          {phase4.risiken.map((risk) => (
            <li key={risk}>{risk}</li>
          ))}
        </ul>
        <Quelle>{phase4.quelle}</Quelle>
      </article>

      <div className="subhead block-head">
        <h3>{landing.titel}</h3>
        <Badge status={landing.status} text={landing.statusText} />
      </div>
      <article className="landing-preview">
        <div className="landing-hero">
          <h3>{landing.headline}</h3>
          <p>{landing.intro}</p>
        </div>
        <div className="landing-body">
          <p>
            <strong>Für wen:</strong> {landing.fuerWen}
          </p>
          <p className="landing-label">So funktioniert's:</p>
          <ol className="landing-steps">
            {landing.schritte.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="landing-label">Preisstufen:</p>
          <ul className="landing-prices">
            {landing.preise.map((price) => (
              <li key={price}>{price}</li>
            ))}
          </ul>
          <p className="landing-cta">„{landing.cta}“</p>
        </div>
      </article>
      <Quelle>{landing.quelle}</Quelle>

      <h3 className="subhead">
        {demo.titel}{" "}
        <span className="quelle">
          von {demo.autor}, {demo.hinweis}
        </span>
      </h3>
      <ol className="steps">
        {demo.schritte.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <Quelle>{demo.quelle}</Quelle>

      <div className="callout">
        <div className="block-head">
          <h3>Positionierung</h3>
          <Badge status={positionierung.status} text={positionierung.statusText} />
        </div>
        <p>{positionierung.text}</p>
        <Quelle>{positionierung.quelle}</Quelle>
      </div>

      <div className="callout">
        <div className="block-head">
          <h3>{abstimmung.titel}</h3>
          <Badge status={abstimmung.status} text={abstimmung.statusText} />
        </div>
        <p>
          Gestellt von {abstimmung.von} um {abstimmung.gestartet} Uhr, Ergebnis um {abstimmung.ende} Uhr.{" "}
          {abstimmung.ergebnis}
        </p>
        <ul className="votes">
          {abstimmung.stimmen.map((vote) => (
            <li key={vote.wer}>
              <strong>{vote.wer}</strong>
              <span>{vote.stimme}</span>
            </li>
          ))}
        </ul>
        <Quelle>{abstimmung.quelle}</Quelle>
      </div>

      <div className="callout">
        <div className="block-head">
          <h3>{leitlinie.titel}</h3>
          <Badge status={leitlinie.status} />
        </div>
        <p>{leitlinie.text}</p>
        <Quelle>{leitlinie.quelle}</Quelle>
      </div>

      <h3 className="subhead">
        Zielkunde <Badge status={zielkunde.status} />
      </h3>
      <div className="table-wrap">
        <table className="sheet">
          <tbody>
            <tr>
              <th scope="row">Wer</th>
              <td>{zielkunde.wer}</td>
            </tr>
            <tr>
              <th scope="row">Problem</th>
              <td>{zielkunde.problem}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Quelle>{zielkunde.quelle}</Quelle>

      <div className="subhead block-head">
        <h3>Preismodell</h3>
        <Badge status={preise.status} text={preise.statusText} />
      </div>
      <p>{preise.modell}</p>
      <ul className="tariffs">
        {preise.pakete.map((paket) => (
          <li key={paket.name} className={paket.haupt ? "tariff is-main" : "tariff"}>
            <h4>
              {paket.name}
              {paket.haupt ? <span className="quelle"> (Hauptprodukt)</span> : null}
            </h4>
            <p className="tariff-price">{paket.preis}</p>
            <p className="tariff-meta">{paket.bots}</p>
            <p className="tariff-meta">{paket.umfang}</p>
          </li>
        ))}
      </ul>
      {preise.hinweis ? <p className="quelle">{preise.hinweis}</p> : null}
      <Quelle>{preise.quelle}</Quelle>

      {wettbewerb.length > 0 ? (
        <>
          <h3 className="subhead">Wettbewerb</h3>
          <div className="table-wrap">
            <table className="sheet">
              <thead>
                <tr>
                  <th>Wettbewerber</th>
                  <th>Abgrenzung</th>
                </tr>
              </thead>
              <tbody>
                {wettbewerb.map((rival) => (
                  <tr key={rival.name}>
                    <td>
                      <strong>{rival.name}</strong>
                    </td>
                    <td>
                      {rival.schwaeche ? (
                        rival.schwaeche
                      ) : (
                        <span className="quelle">noch keine Abgrenzung geliefert</span>
                      )}
                      {rival.vorschlag ? <Badge status="vorschlag" text={rival.vorschlag} /> : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            <strong>Unsere Abgrenzung:</strong> {wettbewerbAbgrenzung.text}
            <Badge status="vorschlag" text={wettbewerbAbgrenzung.label} />
          </p>
        </>
      ) : null}

      <h3 className="subhead">
        Alleinstellungsmerkmale <Badge status={usp.status} />
      </h3>
      <ul className="usp">
        {usp.punkte.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <Quelle>{usp.quelle}</Quelle>

      <h3 className="subhead">
        MVP: {mvp.features.length} Features <Badge status={mvp.status} />{" "}
        <span className="quelle">von {mvp.autor}</span>
      </h3>
      <ol className="mvp">
        {mvp.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ol>
      <p>
        <strong>Regel für Entwürfe:</strong> <Badge status={mvp.regelStatus} /> {mvp.regel}
        {mvp.regelHinweis ? <span className="quelle"> ({mvp.regelHinweis})</span> : null}
      </p>
      <Quelle>{mvp.quelle}</Quelle>

      <h3 className="subhead">
        Tech-Stack <Badge status={tech.status} /> <span className="quelle">Vorschlag von {tech.autor}</span>
      </h3>
      <div className="table-wrap">
        <table className="sheet">
          <tbody>
            {tech.punkte.map((point) => (
              <tr key={point.thema}>
                <th scope="row">{point.thema}</th>
                <td>{point.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Quelle>{tech.quelle}</Quelle>

      <h3 className="subhead">
        Architektur <Badge status={architektur.status} />{" "}
        <span className="quelle">Skizze von {architektur.autor}</span>
      </h3>
      <div className="table-wrap">
        <table className="sheet">
          <tbody>
            {architektur.punkte.map((point) => (
              <tr key={point.thema}>
                <th scope="row">{point.thema}</th>
                <td>{point.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Quelle>{architektur.quelle}</Quelle>

      <h3 className="subhead">Agenda von {agenda.von}</h3>
      <div className="table-wrap">
        <table className="sheet">
          <tbody>
            {agenda.punkte.map((point) => (
              <tr key={point.nr}>
                <th scope="row">{point.nr}</th>
                <td>
                  {point.text}
                  <Badge status={point.status} text={point.label} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Quelle>{agenda.quelle}</Quelle>

      {namen.length > 0 ? (
        <>
          <h3 className="subhead">Firmenname</h3>
          <ul className="candidates">
            {namen.map((name) => (
              <li key={name.titel}>
                <p>{name.titel}</p>
                <Badge status={name.status} text={name.label} />
              </li>
            ))}
          </ul>
          <p className="quelle">Ausgezählt um 11:35. Name: Crewlane, von Lukas freigegeben.</p>
        </>
      ) : null}
    </section>
  );
}
