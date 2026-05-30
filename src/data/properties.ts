export interface Property {
  id: string;
  name: string;
  country: string;
  flag: string;
  bookingUrl: string; // empty = Coming Soon
}

export type CountryFilter = 'All' | 'Cambodia' | 'Indonesia' | 'Laos' | 'Philippines' | 'Thailand' | 'Vietnam';

export const COUNTRIES: CountryFilter[] = [
  'All', 'Cambodia', 'Indonesia', 'Laos', 'Philippines', 'Thailand', 'Vietnam'
];

const BASE = 'https://madmonkeyhostels.com/tours-events/';

export const PROPERTIES: Property[] = [
  { id: 'kh-rong', name: 'Koh Rong', country: 'Cambodia', flag: '🇰🇭', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-koh-rong` },
  { id: 'kh-sdach', name: 'Koh Sdach', country: 'Cambodia', flag: '🇰🇭', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-koh-sdach` },
  { id: 'kh-phnom', name: 'Phnom Penh', country: 'Cambodia', flag: '🇰🇭', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-phnom-penh` },
  { id: 'kh-siem', name: 'Siem Reap', country: 'Cambodia', flag: '🇰🇭', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-siem-reap` },
  { id: 'kh-kampot', name: 'Kampot', country: 'Cambodia', flag: '🇰🇭', bookingUrl: '' },
  { id: 'id-gili', name: 'Gili T', country: 'Indonesia', flag: '🇮🇩', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-gili-trawangan` },
  { id: 'id-kuta', name: 'Kuta Lombok', country: 'Indonesia', flag: '🇮🇩', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-kuta-lombok` },
  { id: 'id-nusa', name: 'Nusa Lembongan', country: 'Indonesia', flag: '🇮🇩', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-nusa-lembongan` },
  { id: 'id-ulu', name: 'Uluwatu', country: 'Indonesia', flag: '🇮🇩', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-uluwatu` },
  { id: 'la-luang', name: 'Luang Prabang', country: 'Laos', flag: '🇱🇦', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-luang` },
  { id: 'la-vang', name: 'Vang Vieng', country: 'Laos', flag: '🇱🇦', bookingUrl: `${BASE}pride-month-event-mad-monkey-vang-vieng` },
  { id: 'ph-duma', name: 'Dumaguete', country: 'Philippines', flag: '🇵🇭', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-dumaguete` },
  { id: 'ph-manila', name: 'Manila', country: 'Philippines', flag: '🇵🇭', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-manila` },
  { id: 'ph-nacpan', name: 'Nacpan Beach', country: 'Philippines', flag: '🇵🇭', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-nacpan` },
  { id: 'ph-panglao', name: 'Panglao', country: 'Philippines', flag: '🇵🇭', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-panglao` },
  { id: 'ph-siargao', name: 'Siargao', country: 'Philippines', flag: '🇵🇭', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-siargao` },
  { id: 'ph-siquijor', name: 'Siquijor', country: 'Philippines', flag: '🇵🇭', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-siquijor` },
  { id: 'th-bangkok', name: 'Bangkok', country: 'Thailand', flag: '🇹🇭', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-bangkok` },
  { id: 'th-chiang', name: 'Chiang Mai', country: 'Thailand', flag: '🇹🇭', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-chiang-mai` },
  { id: 'th-pai', name: 'Pai', country: 'Thailand', flag: '🇹🇭', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-pai` },
  { id: 'th-phuket', name: 'Phuket', country: 'Thailand', flag: '🇹🇭', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-phuket` },
  { id: 'vn-hanoi', name: 'Hanoi', country: 'Vietnam', flag: '🇻🇳', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-hanoi` },
  { id: 'vn-hoian', name: 'Hoi An', country: 'Vietnam', flag: '🇻🇳', bookingUrl: `${BASE}mad-monkey-15th-birthday-mad-monkey-hoi-an` },
];
