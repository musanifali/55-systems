// External category icon images (using icon placeholders)
const categoryImg1 = 'https://via.placeholder.com/64x64/007bff/ffffff?text=🔄';
const categoryImg2 = 'https://via.placeholder.com/64x64/007bff/ffffff?text=✏️';
const categoryImg3 = 'https://via.placeholder.com/64x64/007bff/ffffff?text=✉️';
const categoryImg4 = 'https://via.placeholder.com/64x64/007bff/ffffff?text=💻';
const categoryImg5 = 'https://via.placeholder.com/64x64/007bff/ffffff?text=🚚';
const categoryImg6 = 'https://via.placeholder.com/64x64/007bff/ffffff?text=🚛';
const categoryImg7 = 'https://via.placeholder.com/64x64/007bff/ffffff?text=📱';
const categoryImg8 = 'https://via.placeholder.com/64x64/007bff/ffffff?text=⏰';
const categoryImg9 = 'https://via.placeholder.com/64x64/007bff/ffffff?text=🎧';
const categoryImg10 = 'https://via.placeholder.com/64x64/007bff/ffffff?text=📄';
const categoryImg11 = 'https://via.placeholder.com/64x64/007bff/ffffff?text=💬';
const categoryImg12 = 'https://via.placeholder.com/64x64/007bff/ffffff?text=👤';
const categoryImg13 = 'https://via.placeholder.com/64x64/007bff/ffffff?text=🔊';
const categoryImg14 = 'https://via.placeholder.com/64x64/007bff/ffffff?text=📧';
const categoryImg15 = 'https://via.placeholder.com/64x64/007bff/ffffff?text=🏆';

// External service icon images
const IconImg1 = 'https://via.placeholder.com/80x80/28a745/ffffff?text=S1';
const IconImg2 = 'https://via.placeholder.com/80x80/28a745/ffffff?text=S2';
const IconImg3 = 'https://via.placeholder.com/80x80/28a745/ffffff?text=S3';
const IconImg4 = 'https://via.placeholder.com/80x80/28a745/ffffff?text=S4';

const CatData = [
  {
    id: 1,
    title: 'Web Development',
    className: 'active',
    icon: 'flaticon-monitor',
    image: IconImg1,
    lists: [
      { id: 1, item: 'E-commerce strategy' },
      { id: 2, item: 'Custom design' },
      { id: 3, item: 'Front-End development' },
      { id: 4, item: 'Business intelligence' },
    ],
  },
  {
    id: 2,
    title: 'Mobile Development',
    icon: 'flaticon-mobile-phone',
    image: IconImg2,
    lists: [
      { id: 1, item: 'iOS' },
      { id: 2, item: 'Android' },
      { id: 3, item: 'Hybrid platform' },
      { id: 4, item: 'User testing' },
    ],
  },
  {
    id: 3,
    title: 'Branding Services',
    icon: 'flaticon-icon-253674',
    image: IconImg3,
    lists: [
      { id: 1, item: 'Logo design' },
      { id: 2, item: 'UI/UX design' },
      { id: 3, item: 'Visual design' },
      { id: 4, item: 'Brand identity' },
    ],
  },
  {
    id: 3,
    title: 'Digital Marketing',
    icon: 'flaticon-icon-149196',
    image: IconImg4,
    lists: [
      { id: 1, item: 'Marketing Strategy' },
      { id: 2, item: 'Paid Media' },
      { id: 3, item: 'Influencer Marketing' },
      { id: 4, item: 'Digital Marketing' },
    ],
  },
];

const CatData2 = [
  {
    id: 1,
    title: 'Android',
    icon: 'flaticon-mobile-phone',
    content:
      'If success is a process with a number of defined steps, then it is just like any other process.',
  },
  {
    id: 2,
    title: 'Asp.net web service',
    icon: 'flaticon-thunder',
    content:
      'When you decide you want to have a romantic meal for two, there are many steps that you need to perform in order for that to happen.',
  },
  {
    id: 3,
    title: 'Core PHP',
    icon: 'flaticon-author',
    content:
      'You need to determine the exact sequence of events and write it down. Begin with the outcome in mind. Write without stopping.',
  },
  {
    id: 4,
    title: 'Ajax',
    icon: 'flaticon-monitor',
    content:
      'This is the beginning of creating the life that you want to live. Know what the future holds for you as a result of the choice you can make today.',
  },
  {
    id: 5,
    title: 'UI/UX design',
    icon: 'flaticon-mobile-phone',
    content:
      'If success is a process with a number of defined steps, then it is just like any other process.',
  },
  {
    id: 6,
    title: 'Logo design',
    icon: 'flaticon-thunder',
    content:
      'When you decide you want to have a romantic meal for two, there are many steps that you need to perform in order for that to happen.',
  },
];

const CatData3 = [
  {
    id: 1,
    title: 'Data Synchronization',
    categoryImg: categoryImg1,
  },
  {
    id: 2,
    title: 'Content Management',
    categoryImg: categoryImg2,
  },
  {
    id: 3,
    title: 'Content Delivery',
    categoryImg: categoryImg3,
  },
  {
    id: 4,
    title: 'Transaction Processing',
    categoryImg: categoryImg4,
  },
  {
    id: 5,
    title: 'Data Synchronization',
    categoryImg: categoryImg5,
  },
  {
    id: 6,
    title: 'Content Management',
    categoryImg: categoryImg6,
  },
  {
    id: 7,
    title: 'Content Delivery',
    categoryImg: categoryImg7,
  },
  {
    id: 8,
    title: 'Transaction Processing',
    categoryImg: categoryImg8,
  },
  {
    id: 9,
    title: 'Data Synchronization',
    categoryImg: categoryImg9,
  },
  {
    id: 10,
    title: 'Content Management',
    categoryImg: categoryImg10,
  },
  {
    id: 11,
    title: 'Content Delivery',
    categoryImg: categoryImg11,
  },
  {
    id: 12,
    title: 'Transaction Processing',
    categoryImg: categoryImg12,
  },
  {
    id: 13,
    title: 'Data Synchronization',
    categoryImg: categoryImg13,
  },
  {
    id: 14,
    title: 'Content Management',
    categoryImg: categoryImg14,
  },
  {
    id: 15,
    title: 'Content Delivery',
    categoryImg: categoryImg15,
  },
];

export default CatData;
export { CatData2, CatData3 };
