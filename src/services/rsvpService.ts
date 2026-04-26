import type { RSVPEntry } from '../types/rsvp';

const KEY = 'wedding_rsvps';

export function getRSVPs(): RSVPEntry[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}

export function addRSVP(entry: Omit<RSVPEntry, 'id' | 'submittedAt'>): RSVPEntry {
  const entries = getRSVPs();
  const newEntry: RSVPEntry = {
    ...entry,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  };
  localStorage.setItem(KEY, JSON.stringify([...entries, newEntry]));
  return newEntry;
}
