import type { WishEntry } from '../types/wishes';

const KEY = 'wedding_wishes';

export function getWishes(): WishEntry[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}

export function addWish(entry: Omit<WishEntry, 'id' | 'submittedAt'>): WishEntry {
  const entries = getWishes();
  const newEntry: WishEntry = {
    ...entry,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  };
  localStorage.setItem(KEY, JSON.stringify([...entries, newEntry]));
  return newEntry;
}
