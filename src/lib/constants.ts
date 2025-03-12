interface Link {
  url: string;
  label: string;
};

export const ROUTES: Link[] = [
  {
    url: '/',
    label: 'Home'
  },
  {
    url: '/works',
    label: 'Works'
  },
  {
    url: '/posts',
    label: 'Posts'
  },
  {
    url: '/about',
    label: 'About'
  },
];
