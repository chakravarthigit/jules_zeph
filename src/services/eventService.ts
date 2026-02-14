export const mockEvents = [
  {
    id: '1',
    title: 'Sunset Yoga',
    host: 'Sarah J.',
    time: '6:30 PM',
    distance: '0.2 mi',
    category: 'Active',
    price: 'Free',
    attendees: 24,
  },
  {
    id: '2',
    title: 'Beachside Jam',
    host: 'Priya M.',
    time: '7:00 PM',
    distance: '0.5 mi',
    category: 'Music',
    price: 'Free',
    attendees: 12,
  }
];

export const getEvents = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockEvents;
};
