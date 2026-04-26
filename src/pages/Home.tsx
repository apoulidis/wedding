import './Home.css';

const BRIDE = 'Ευμορφια';
const GROOM = 'Αναστασιος';
const DATE = 'Κυριακη, 28 Ιουνιου 2026';
const TIME = '18:00';
const CEREMONY_VENUE = 'Ι. Ναος Αγ. Βαρβαρας';
const CEREMONY_ADDRESS = 'Ανω Πατησια, Αθηνα';
const RECEPTION_VENUE = 'Le Soiree de Votanique';
const RECEPTION_ADDRESS = 'Καστοριας 37, Αθηνα';
const RSVP_DEADLINE = '31 Μαιου 2026';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-together">Μαζι με τις οικογενειες τους</p>
          <h1 className="hero-names">
            {BRIDE} <span className="hero-amp">&amp;</span> {GROOM}
          </h1>
          <p className="hero-invite">σας προσκαλουν στον γαμο τους</p>
          <div className="hero-divider" />
          <p className="hero-date">{DATE}</p>
          <p className="hero-time">{TIME}</p>
        </div>
      </section>

      {/* Details */}
      <section className="details" id="details">
        <h2 className="section-title">Η Μερα μας</h2>
        <div className="details-grid">
          <div className="detail-card">
            <div className="detail-icon">⛪</div>
            <h3>Τελετη</h3>
            <p className="detail-venue">{CEREMONY_VENUE}</p>
            <p className="detail-address">{CEREMONY_ADDRESS}</p>
            <p className="detail-time">{TIME}</p>
          </div>
          <div className="detail-card">
            <div className="detail-icon">🥂</div>
            <h3>Δεξιωση</h3>
            <p className="detail-venue">{RECEPTION_VENUE}</p>
            <p className="detail-address">{RECEPTION_ADDRESS}</p>
            <p className="detail-time">αμεσως μετα</p>
          </div>
        </div>
          <p className="details-rsvp-note">
          Παρακαλουμε απαντηστε εως <strong>{RSVP_DEADLINE}</strong>
        </p>
        <a className="btn" href="#rsvp">Απαντηση RSVP</a>
      </section>
    </>
  );
}
