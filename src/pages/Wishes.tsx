import { useState, useEffect } from 'react';
import { addWish, getWishes } from '../services/wishesService';
import type { WishEntry } from '../types/wishes';
import './Wishes.css';

// ✏️  Paste your Formspree form ID here — you can use a separate form for wishes
const FORMSPREE_ID = 'xzdywyja';

export default function Wishes() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState<WishEntry[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setWishes(getWishes());
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) { setError('Παρακαλούμε εισάγετε το όνομά σας.'); return; }
    if (!message.trim()) { setError('Παρακαλούμε γράψτε ένα μήνυμα.'); return; }
    setError('');
    setSending(true);

    const wish = addWish({ name: name.trim(), message: message.trim() });
    setWishes(w => [wish, ...w]);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      });
      if (!res.ok) throw new Error('Formspree error');
    } catch {
      // Local backup already saved
    }

    setName('');
    setMessage('');
    setSending(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section className="wishes-section" id="wishes">
      <h2 className="section-title">Βιβλιο Ευχων</h2>
      <p className="section-sub">Αφηστε μας ενα μηνυμα — τα λογια σας θα γινουν μερος της ιστοριας μας.</p>

      {/* Form */}
      <form className="wish-form" onSubmit={handleSubmit} noValidate>
        {error && <p className="wish-error">{error}</p>}
        {submitted && <p className="wish-success">✨ Η ευχη σας προστεθηκε — ευχαριστουμε!</p>}
        <div className="form-group">
          <label>Όνομα σας *</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="π.χ. Γιαννης &amp; Μαρια"
          />
        </div>
        <div className="form-group">
          <label>Το μηνυμα σας *</label>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Γραψτε τις ευχες σας…"
            rows={4}
          />
        </div>
        <button className="btn" type="submit" disabled={sending}>
          {sending ? 'Αποστολη…' : 'Αφηστε μηνυμα 💌'}
        </button>
      </form>

      {/* Book of wishes */}
      {wishes.length > 0 && (
        <div className="wish-book">
          <h3 className="wish-book-title">Ευχες απο τους καλεσμενους μας</h3>
          <div className="wish-cards">
            {wishes.map(w => (
              <div key={w.id} className="wish-card">
                <p className="wish-message">"{w.message}"</p>
                <p className="wish-author">— {w.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
