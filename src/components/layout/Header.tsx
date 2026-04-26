import { useState } from 'react';
import './Header.css';

const links = [
  { label: 'Αρχικη', href: '#home' },
  { label: 'Η Μερα μας', href: '#details' },
  { label: 'ΑΠΑΝΤΗΣΗ', href: '#rsvp' },
  { label: 'Ευχες', href: '#wishes' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <a className="header-brand" href="#home">
          Α <span className="header-ampersand">&amp;</span> Ε
        </a>
        <button className="header-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
        <nav className={`header-nav${open ? ' open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
