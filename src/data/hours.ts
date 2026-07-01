import type { Locale } from '../i18n/ui';

// Single source of truth for opening hours.
// Schedule: Mon–Sat morning 10:00–14:00; Tue/Thu/Fri also evening 18:00–21:00; Sun closed.

/** Rows for display (label + value), accurate and compact. */
export const HOURS: Record<Locale, { day: string; value: string }[]> = {
  el: [
    { day: 'Δευτέρα, Τετάρτη & Σάββατο', value: '10:00 – 14:00' },
    { day: 'Τρίτη, Πέμπτη & Παρασκευή', value: '10:00 – 14:00 & 18:00 – 21:00' },
  ],
  en: [
    { day: 'Monday, Wednesday & Saturday', value: '10:00 – 14:00' },
    { day: 'Tuesday, Thursday & Friday', value: '10:00 – 14:00 & 18:00 – 21:00' },
  ],
};

/** One-line summary for FAQ / llms.txt. */
export const HOURS_SUMMARY: Record<Locale, string> = {
  el: 'Δευτέρα, Τετάρτη, Σάββατο 10:00–14:00. Τρίτη, Πέμπτη, Παρασκευή 10:00–14:00 και 18:00–21:00.',
  en: 'Monday, Wednesday, Saturday 10:00–14:00. Tuesday, Thursday, Friday 10:00–14:00 and 18:00–21:00.',
};

/** schema.org OpeningHoursSpecification (grouped, accurate). */
export const OPENING_HOURS_SCHEMA = [
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Wednesday', 'Saturday'], opens: '10:00', closes: '14:00' },
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Thursday', 'Friday'], opens: '10:00', closes: '14:00' },
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Thursday', 'Friday'], opens: '18:00', closes: '21:00' },
];
