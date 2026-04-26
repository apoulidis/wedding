export interface RSVPEntry {
  id: string;
  name: string;
  attending: boolean;
  guestCount: number;
  email?: string;
  dietaryNotes: string;
  submittedAt: string;
}
