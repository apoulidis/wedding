import './Home.css';

const BRIDE = 'Ευμορφία';
const GROOM = 'Αναστάσιος';
const TIME = '18:00';
const CEREMONY_VENUE = 'Ι. Ναος Αγ. Βαρβαρας';
const CEREMONY_ADDRESS = 'Ανω Πατησια, Αθηνα';
const CEREMONY_MAPS = 'https://maps.google.com/?q=Ιερος+Ναος+Αγιας+Βαρβαρας+Ανω+Πατησια+Αθηνα';
const RECEPTION_VENUE = 'Le Soiree de Votanique';
const RECEPTION_ADDRESS = 'Καστοριας 37, Αθηνα';
const RECEPTION_MAPS = 'https://maps.google.com/?q=Le+Soiree+de+Votanique+Καστοριας+37+Αθηνα';
const RSVP_DEADLINE = '31 Μαιου 2026';

const CAL_DAYS = ['Δ','Τ','Τ','Π','Π','Σ','Κ'];
const CAL_WEEKS = [
  [1,2,3,4,5,6,7],
  [8,9,10,11,12,13,14],
  [15,16,17,18,19,20,21],
  [22,23,24,25,26,27,28],
  [29,30,null,null,null,null,null],
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-names">
            {BRIDE} <span className="hero-amp">&amp;</span> {GROOM}
          </h1>
          <div className="hero-calendar">
            <div className="hero-cal-month">
              <span className="cal-line" />
              <span>ΙΟΥΝΙΟΣ 2026</span>
              <span className="cal-line" />
            </div>
            <div className="hero-cal-grid">
              {CAL_DAYS.map((d, i) => (
                <span key={i} className="cal-header">{d}</span>
              ))}
              {CAL_WEEKS.map((week, wi) =>
                week.map((day, di) =>
                  day === null ? (
                    <span key={`${wi}-${di}`} className="cal-day cal-empty" />
                  ) : day === 28 ? (
                    <span key={day} className="cal-day cal-highlight">
                      {day}
                      <span className="cal-heart">♡</span>
                    </span>
                  ) : (
                    <span key={day} className="cal-day">{day}</span>
                  )
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="details" id="details">
        <div className="details-grid">
          <div className="detail-card">
            <div className="detail-icon">⛪</div>
            <p className="detail-script">{CEREMONY_VENUE}</p>
            <a
              className="detail-address detail-link"
              href={CEREMONY_MAPS}
              target="_blank"
              rel="noopener noreferrer"
            >
              📍 {CEREMONY_ADDRESS}
            </a>
          </div>
          <div className="detail-card">
            <div className="detail-icon">🕕</div>
            <p className="detail-script">{TIME}</p>
            <p className="detail-script detail-script--date">Κυριακή, 28 Ιουνίου 2026</p>
          </div>
          <div className="detail-card">
            <div className="detail-icon">🥂</div>
            <p className="detail-script">{RECEPTION_VENUE}</p>
            <a
              className="detail-address detail-link"
              href={RECEPTION_MAPS}
              target="_blank"
              rel="noopener noreferrer"
            >
              📍 {RECEPTION_ADDRESS}
            </a>
          </div>
        </div>
        <p className="details-rsvp-note">
          Παρακαλούμε απαντήστε μας έως <strong>{RSVP_DEADLINE}</strong> μέσω του παρακάτω RSVP ή στα τηλέφωνά μας
        </p>
        <a className="btn" href="#rsvp">Απάντηση RSVP</a>
      </section>
    </>
  );
}
