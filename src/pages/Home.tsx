import './Home.css';

const BRIDE = 'Ευμορφία';
const GROOM = 'Αναστάσιος';
const TIME = '18:00';
const CEREMONY_VENUE = 'Ι. Ναός Αγ. Βαρβάρας';
const CEREMONY_ADDRESS = 'Αγίας Λαύρας 224, Ανω Πατησια, Αθηνα';
const CEREMONY_MAPS = 'https://maps.app.goo.gl/yqksxTXvSrfhuBC39';
const RECEPTION_VENUE = 'Le Soiree de Votanique';
const RECEPTION_ADDRESS = 'Καστοριάς 37, Αθηνα';
const RECEPTION_MAPS = 'https://maps.google.com/?q=Le+Soiree+de+Votanique+Καστοριας+37+Αθηνα';

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
            {GROOM} <span className="hero-amp">&amp;</span> {BRIDE}
          </h1>
          <div className="hero-calendar">
            <div className="hero-cal-month">
              <span className="cal-line" />
              <span>ΙΟΥΝΙΟΣ</span>
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
            <div className="detail-icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="15" stroke="#9a8070" strokeWidth="1.5"/>
                <circle cx="18" cy="18" r="14" stroke="#e8e0d8" strokeWidth="0.5"/>
                {/* tick marks */}
                <line x1="18" y1="4" x2="18" y2="6.5" stroke="#c8b9ad" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="18" y1="29.5" x2="18" y2="32" stroke="#c8b9ad" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="4" y1="18" x2="6.5" y2="18" stroke="#c8b9ad" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="29.5" y1="18" x2="32" y2="18" stroke="#c8b9ad" strokeWidth="1.2" strokeLinecap="round"/>
                {/* Hour hand → 6 o'clock (pointing down) */}
                <line x1="18" y1="18" x2="18" y2="27" stroke="#2c1810" strokeWidth="2" strokeLinecap="round"/>
                {/* Minute hand → 12 o'clock (pointing up) */}
                <line x1="18" y1="18" x2="18" y2="9" stroke="#2c1810" strokeWidth="1.3" strokeLinecap="round"/>
                <circle cx="18" cy="18" r="1.8" fill="#2c1810"/>
              </svg>
            </div>
            <p className="detail-script">Κυριακή, 28 Ιουνίου 2026</p>
            <p className="detail-script">{TIME}</p>
          </div>            
          <div className="detail-card">
            <div className="detail-icon">⛪</div>
            <p className="detail-script detail-script--greek">{CEREMONY_VENUE}</p>
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
      </section>
    </>
  );
}
