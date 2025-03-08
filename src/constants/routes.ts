interface Route {
  href: string;
  label: string;
}

export const ROUTES: Record<string, Route> = {
  home: {
    href: '/',
    label: 'Home'
  },
  works: {
    href: '/works',
    label: 'Works'
  },
  posts: {
    href: '/posts',
    label: 'Posts'
  },
  about: {
    href: '/about',
    label: 'About'
  },
};
