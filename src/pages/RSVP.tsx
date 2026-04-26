import { useState } from 'react';
import { addRSVP } from '../services/rsvpService';
import './RSVP.css';

// ✏️  Paste your Formspree form ID here (from formspree.io → New Form)
const FORMSPREE_ID = 'xzdywyja';

interface FormState {
  name: string;
  attending: boolean | null;
  guestCount: number;
  dietaryNotes: string;
}

const initial: FormState = {
  name: '',
  attending: null,
  guestCount: 1,
  dietaryNotes: '',
};

export default function RSVP() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm(f => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) { setError('Παρακαλούμε εισάγετε το όνομά σας.'); return; }
    if (form.attending === null) { setError('Παρακαλούμε επιλέξτε αν θα παρευρεθείτε.'); return; }
    setError('');
    setSending(true);

    // Save locally as backup
    addRSVP({
      name: form.name.trim(),
      attending: form.attending,
      guestCount: form.attending ? form.guestCount : 0,
      dietaryNotes: form.dietaryNotes.trim(),
    });

    // Send to Formspree
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          attending: form.attending ? 'Yes 🥂' : 'No 😔',
          guests: form.attending ? form.guestCount : 0,
          dietary: form.dietaryNotes.trim() || '—',
        }),
      });
      if (!res.ok) throw new Error('Formspree error');
    } catch {
      // Still show success — local backup was saved
    }

    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="rsvp-section" id="rsvp">
        <div className="rsvp-card rsvp-confirm">
          <div className="confirm-icon">✉️</div>
          <h2>Ευχαριστουμε, {form.name.split(' ')[0]}!</h2>
          {form.attending
            ? <p>Χαιρομαστε που θα ειστε μαζι μας! Ανυπομονουμε να γιορτασουμε μαζι!</p>
            : <p>Λυπουμαστε που δεν μπορειτε να ερθετε, αλλα σας ευχαριστουμε που μας ενημερωσατε.</p>}
          <button className="btn" onClick={() => { setForm(initial); setSubmitted(false); }}>
            Νεα απαντηση
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="rsvp-section" id="rsvp">
      <h2 className="section-title">RSVP</h2>
      <p className="section-sub">Παρακαλούμε απαντήστε μας έως 31 Μαΐου μέσω του παρακάτω RSVP ή στα τηλέφωνά μας</p>

      <form className="rsvp-card" onSubmit={handleSubmit} noValidate>
        {error && <p className="rsvp-error">{error}</p>}

        <div className="form-group">
          <label>Ονοματεπωνυμο *</label>
          <input
            type="text"
            value={form.name}
            onChange={e => set('name', e.target.value)}
            placeholder="Το ονομα σας"
            required
          />
        </div>

        <div className="form-group">
          <label>Θα παρευρεθειτε; *</label>
          <div className="attend-buttons">
            <button
              type="button"
              className={`attend-btn${form.attending === true ? ' active' : ''}`}
              onClick={() => set('attending', true)}
            >
              🥂 Ναι, θα ειμαι εκει!
            </button>
            <button
              type="button"
              className={`attend-btn${form.attending === false ? ' active decline' : ''}`}
              onClick={() => set('attending', false)}
            >
              😔 Δυστυχως δεν μπορω
            </button>
          </div>
        </div>

        {form.attending === true && (
          <>
            <div className="form-group">
              <label>Αριθμος ατομων (συμπεριλαμβανομενου/ης εσας)</label>
              <div className="counter">
                <button type="button" onClick={() => set('guestCount', Math.max(1, form.guestCount - 1))}>−</button>
                <span>{form.guestCount}</span>
                <button type="button" onClick={() => set('guestCount', Math.min(10, form.guestCount + 1))}>+</button>
              </div>
            </div>

            <div className="form-group">
              <label>Διατροφικες αναγκες / σημειωσεις</label>
              <textarea
                value={form.dietaryNotes}
                onChange={e => set('dietaryNotes', e.target.value)}
                placeholder="Βεγεταριανισμος, αλλεργιες, κ.τ.λ."
                rows={3}
              />
            </div>
          </>
        )}

        <button className="btn" type="submit" disabled={sending}>
          {sending ? 'Αποστολη…' : 'Αποστολη RSVP'}
        </button>
      </form>
    </section>
  );
}
