// External team member images from Unsplash
const teamImg1 = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&w=400&q=80';
const teamImg2 = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&w=400&q=80';
const teamImg3 = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=400&q=80';
const teamImg4 = 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=400&q=80';
const teamImg5 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400&q=80';
const teamImg6 = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=400&q=80';
const teamImg7 = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=400&q=80';
const teamImg8 = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&w=400&q=80';
const teamImg9 = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&w=400&q=80';
const teamImg10 = 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&w=400&q=80';
const teamImg11 = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=400&q=80';
const teamImg12 = 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&w=400&q=80';

const TeamList = [
  {
    id: 1,
    image: teamImg1,
    name: 'Aaron Sharp',
    position: 'Chief People Officer',
    email: 'info@example.com',
    phone: '+101 800 555 45',
    address: '2 Thorndale Circle, Magnolia,de, 19962  United States',
    social: [
      { id: 1, icon: 'fab fa-facebook-f', url: 'https://www.facebook.com' },
      { id: 2, icon: 'fab fa-twitter', url: 'https://twitter.com' },
      { id: 3, icon: 'fab fa-linkedin-in', url: 'https://in.linkedin.com' },
    ],
    blockquote:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volup tatem acusantium dolor emque laud antium.',
  },
  {
    id: 2,
    image: teamImg2,
    name: 'Homer Reyes',
    position: 'Vice President',
    email: 'info@example.com',
    phone: '+101 800 555 45',
    address: '2 Thorndale Circle, Magnolia,de, 19962  United States',
    social: [
      { id: 1, icon: 'fab fa-facebook-f', url: 'https://www.facebook.com' },
      { id: 2, icon: 'fab fa-twitter', url: 'https://twitter.com' },
      { id: 3, icon: 'fab fa-linkedin-in', url: 'https://in.linkedin.com' },
      { id: 4, icon: 'fab fa-instagram', url: 'https://www.instagram.com' },
    ],
    blockquote:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volup tatem acusantium dolor emque laud antium.',
  },
  {
    id: 3,
    image: teamImg3,
    name: 'Felica Queen',
    position: 'Team Leader',
    email: 'info@example.com',
    phone: '+101 800 555 45',
    address: '2 Thorndale Circle, Magnolia,de, 19962  United States',
    social: [
      { id: 1, icon: 'fab fa-facebook-f', url: 'https://www.facebook.com' },
      { id: 2, icon: 'fab fa-twitter', url: 'https://twitter.com' },
      { id: 3, icon: 'fab fa-linkedin-in', url: 'https://in.linkedin.com' },
    ],
    blockquote:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volup tatem acusantium dolor emque laud antium.',
  },
  {
    id: 4,
    image: teamImg4,
    name: 'Sara Lisbon',
    position: 'Production Manager',
    email: 'info@example.com',
    phone: '+101 800 555 45',
    address: '2 Thorndale Circle, Magnolia,de, 19962  United States',
    social: [
      { id: 1, icon: 'fab fa-facebook-f', url: 'https://www.facebook.com' },
      { id: 2, icon: 'fab fa-twitter', url: 'https://twitter.com' },
      { id: 3, icon: 'fab fa-linkedin-in', url: 'https://in.linkedin.com' },
      { id: 4, icon: 'fa-brands fa-github', url: 'https://github.com' },
    ],
    blockquote:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volup tatem acusantium dolor emque laud antium.',
  },
  {
    id: 5,
    image: teamImg5,
    name: 'Michael Bean',
    position: 'Quality control',
    email: 'info@example.com',
    phone: '+101 800 555 45',
    address: '2 Thorndale Circle, Magnolia,de, 19962  United States',
    social: [
      { id: 1, icon: 'fab fa-facebook-f', url: 'https://www.facebook.com' },
      { id: 2, icon: 'fab fa-twitter', url: 'https://twitter.com' },
      { id: 3, icon: 'fab fa-linkedin-in', url: 'https://in.linkedin.com' },
    ],
    blockquote:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volup tatem acusantium dolor emque laud antium.',
  },
  {
    id: 6,
    image: teamImg6,
    name: 'Alice Williams',
    position: 'Marketing manager',
    email: 'info@example.com',
    phone: '+101 800 555 45',
    address: '2 Thorndale Circle, Magnolia,de, 19962  United States',
    social: [
      { id: 1, icon: 'fab fa-facebook-f', url: 'https://www.facebook.com' },
      { id: 2, icon: 'fab fa-twitter', url: 'https://twitter.com' },
      { id: 3, icon: 'fab fa-linkedin-in', url: 'https://in.linkedin.com' },
      { id: 4, icon: 'fa-brands fa-dribbble', url: 'https://dribbble.com' },
    ],
    blockquote:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volup tatem acusantium dolor emque laud antium.',
  },
  {
    id: 7,
    image: teamImg7,
    name: 'Paul Flavius',
    position: 'Human resources',
    email: 'info@example.com',
    phone: '+101 800 555 45',
    address: '2 Thorndale Circle, Magnolia,de, 19962  United States',
    social: [
      { id: 1, icon: 'fab fa-facebook-f', url: 'https://www.facebook.com' },
      { id: 2, icon: 'fab fa-twitter', url: 'https://twitter.com' },
      { id: 3, icon: 'fab fa-linkedin-in', url: 'https://in.linkedin.com' },
    ],
    blockquote:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volup tatem acusantium dolor emque laud antium.',
  },
  {
    id: 8,
    image: teamImg8,
    name: 'Anne Smith',
    position: 'Sales and Marketing',
    email: 'info@example.com',
    phone: '+101 800 555 45',
    address: '2 Thorndale Circle, Magnolia,de, 19962  United States',
    social: [
      { id: 1, icon: 'fab fa-facebook-f', url: 'https://www.facebook.com' },
      { id: 2, icon: 'fab fa-twitter', url: 'https://twitter.com' },
      { id: 3, icon: 'fab fa-linkedin-in', url: 'https://in.linkedin.com' },
      { id: 4, icon: 'fa-brands fa-dribbble', url: 'https://dribbble.com' },
    ],
    blockquote:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volup tatem acusantium dolor emque laud antium.',
  },
  {
    id: 9,
    image: teamImg9,
    name: 'Mellissa Doe',
    position: 'Marketing Expert',
    email: 'info@example.com',
    phone: '+101 800 555 45',
    address: '2 Thorndale Circle, Magnolia,de, 19962  United States',
    social: [
      { id: 1, icon: 'fab fa-facebook-f', url: 'https://www.facebook.com' },
      { id: 2, icon: 'fab fa-twitter', url: 'https://twitter.com' },
      { id: 3, icon: 'fab fa-linkedin-in', url: 'https://in.linkedin.com' },
    ],
    blockquote:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volup tatem acusantium dolor emque laud antium.',
  },
  {
    id: 10,
    image: teamImg10,
    name: 'Ben Aguilar',
    position: 'Community',
    email: 'info@example.com',
    phone: '+101 800 555 45',
    address: '2 Thorndale Circle, Magnolia,de, 19962  United States',
    social: [
      { id: 1, icon: 'fab fa-facebook-f', url: 'https://www.facebook.com' },
      { id: 2, icon: 'fab fa-twitter', url: 'https://twitter.com' },
      { id: 3, icon: 'fab fa-linkedin-in', url: 'https://in.linkedin.com' },
      { id: 4, icon: 'fa-brands fa-dribbble', url: 'https://dribbble.com' },
    ],
    blockquote:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volup tatem acusantium dolor emque laud antium.',
  },
  {
    id: 11,
    image: teamImg11,
    name: 'Kim Hamilton',
    position: 'Web Developer',
    email: 'info@example.com',
    phone: '+101 800 555 45',
    address: '2 Thorndale Circle, Magnolia,de, 19962  United States',
    social: [
      { id: 1, icon: 'fab fa-facebook-f', url: 'https://www.facebook.com' },
      { id: 2, icon: 'fab fa-twitter', url: 'https://twitter.com' },
      { id: 3, icon: 'fab fa-linkedin-in', url: 'https://in.linkedin.com' },
    ],
    blockquote:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volup tatem acusantium dolor emque laud antium.',
  },
  {
    id: 12,
    image: teamImg12,
    name: 'Jhon Deo',
    position: 'Web Designer',
    email: 'info@example.com',
    phone: '+101 800 555 45',
    address: '2 Thorndale Circle, Magnolia,de, 19962  United States',
    social: [
      { id: 1, icon: 'fab fa-facebook-f', url: 'https://www.facebook.com' },
      { id: 2, icon: 'fab fa-twitter', url: 'https://twitter.com' },
      { id: 3, icon: 'fab fa-linkedin-in', url: 'https://in.linkedin.com' },
      { id: 4, icon: 'fa-brands fa-skype', url: 'https://www.skype.com'  },
    ],
    blockquote:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volup tatem acusantium dolor emque laud antium.',
  },
];

export default TeamList;
