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

export const PROPERTIES: Property[] = [
  { id: 'kh-rong', name: 'Koh Rong', country: 'Cambodia', flag: '🇰🇭', bookingUrl: '' },
  { id: 'kh-sdach', name: 'Koh Sdach', country: 'Cambodia', flag: '🇰🇭', bookingUrl: '' },
  { id: 'kh-phnom', name: 'Phnom Penh', country: 'Cambodia', flag: '🇰🇭', bookingUrl: '' },
  { id: 'kh-siem', name: 'Siem Reap', country: 'Cambodia', flag: '🇰🇭', bookingUrl: '' },
  { id: 'kh-kampot', name: 'Kampot', country: 'Cambodia', flag: '🇰🇭', bookingUrl: '' },
  { id: 'id-gili', name: 'Gili T', country: 'Indonesia', flag: '🇮🇩', bookingUrl: '' },
  { id: 'id-kuta', name: 'Kuta Lombok', country: 'Indonesia', flag: '🇮🇩', bookingUrl: '' },
  { id: 'id-nusa', name: 'Nusa Lembongan', country: 'Indonesia', flag: '🇮🇩', bookingUrl: '' },
  { id: 'id-ulu', name: 'Uluwatu', country: 'Indonesia', flag: '🇮🇩', bookingUrl: '' },
  { id: 'la-luang', name: 'Luang Prabang', country: 'Laos', flag: '🇱🇦', bookingUrl: '' },
  { id: 'la-vang', name: 'Vang Vieng', country: 'Laos', flag: '🇱🇦', bookingUrl: '' },
  { id: 'ph-duma', name: 'Dumaguete', country: 'Philippines', flag: '🇵🇭', bookingUrl: '' },
  { id: 'ph-manila', name: 'Manila', country: 'Philippines', flag: '🇵🇭', bookingUrl: '' },
  { id: 'ph-nacpan', name: 'Nacpan Beach', country: 'Philippines', flag: '🇵🇭', bookingUrl: '' },
  { id: 'ph-panglao', name: 'Panglao', country: 'Philippines', flag: '🇵🇭', bookingUrl: '' },
  { id: 'ph-siargao', name: 'Siargao', country: 'Philippines', flag: '🇵🇭', bookingUrl: '' },
  { id: 'ph-siquijor', name: 'Siquijor', country: 'Philippines', flag: '🇵🇭', bookingUrl: '' },
  { id: 'th-bangkok', name: 'Bangkok', country: 'Thailand', flag: '🇹🇭', bookingUrl: '' },
  { id: 'th-chiang', name: 'Chiang Mai', country: 'Thailand', flag: '🇹🇭', bookingUrl: '' },
  { id: 'th-pai', name: 'Pai', country: 'Thailand', flag: '🇹🇭', bookingUrl: '' },
  { id: 'th-phuket', name: 'Phuket', country: 'Thailand', flag: '🇹🇭', bookingUrl: '' },
  { id: 'vn-hanoi', name: 'Hanoi', country: 'Vietnam', flag: '🇻🇳', bookingUrl: '' },
  { id: 'vn-hoian', name: 'Hoi An', country: 'Vietnam', flag: '🇻🇳', bookingUrl: '' },
];
