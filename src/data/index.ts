// src/data/index.ts

export const prayerTimes = {
  fajr: '05:12',
  dhuhr: '13:34',
  asr: '15:56',
  maghrib: '18:52',
  isha: '20:15',
  nextPrayer: 'DHUHR',
  nextPrayerTime: '13:34',
  currentDate: 'Wednesday 20 March',
  ramadanDay: '14 Ramadan',
};

export const quickActions = [
  { id: '1', icon: 'compass', label: 'Find Qibla', color: '#2D6A4F', bgColor: '#EAF4ED' },
  { id: '2', icon: 'book-open', label: 'Learn Quran', color: '#E76F51', bgColor: '#FAD7C8' },
  { id: '3', icon: 'map', label: 'Prayer Guide', color: '#2196F3', bgColor: '#BBDEFB' },
  { id: '4', icon: 'users', label: 'Members', color: '#9C27B0', bgColor: '#E1BEE7' },
];

export const campaigns = [
  {
    id: '1',
    tag: 'RUNNING',
    tagColor: '#2D6A4F',
    title: 'Mosque Expansion Project',
    description: 'Creating more space for our growing Muslim community. Major community closure. Structural work on the East Wing is currently underway.',
    raised: 587000,
    goal: 250200,
    progress: 0.75,
    category: 'MOSQUE',
  },
  {
    id: '2',
    tag: 'EDUCATION FUND',
    tagColor: '#2196F3',
    title: 'Education Library Initiative',
    description: "Modernising our learning resources with new tablets, a high-speed library network, and a digital archive of classical texts.",
    raised: 0,
    goal: 250100,
    progress: 0.3,
    category: 'EDUCATION',
  },
];

export const events = [
  {
    id: '1',
    category: 'EDUCATION',
    categoryColor: '#2196F3',
    categoryBg: '#BBDEFB',
    title: 'Weekly Sunnah Study Circle',
    description: "Deep dive into the life of the Prophet (PBUH) with Shaikh Hamdan in a regular sessions",
    date: 'MON, 26 MAR • 6:00 PM',
    action: 'Register Now',
    image: 'study',
  },
  {
    id: '2',
    category: 'COMMUNITY',
    categoryColor: '#2D6A4F',
    categoryBg: '#EAF4ED',
    title: 'General Community Iftar',
    description: "A night of fellowship and breaking fast together. Open to all community members.",
    date: 'FRI, 29 MAR • 7:15 PM',
    action: 'RSVP Now',
    image: 'community',
  },
  {
    id: '3',
    category: 'VOLUNTEER',
    categoryColor: '#E76F51',
    categoryBg: '#FAD7C8',
    title: 'Food Bank the Future',
    description: "Help organise and pack food parcels for families in need this Ramadan.",
    date: 'SAT, 30 MAR • 11:00 AM',
    action: 'Join Team',
    image: 'volunteer',
  },
];

export const runningCampaign = {
  title: 'Masjid Library Book Project',
  description: 'Help us grow our book programme and bring people and communities together. Your contribution builds our future.',
  progress: 0.61,
  raised: 561,
  goal: 920,
};
