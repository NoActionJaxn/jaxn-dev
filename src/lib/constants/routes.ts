import type { LinkItem } from "../../types/linkItem";

export const ROUTES: Record<string, LinkItem> = {
  home: {
    url: '/',
    label: 'Home'
  },
  posts: {
    url: '/posts',
    label: 'Posts'
  },
  works: {
    url: '/works',
    label: 'Works'
  },
  about: {
    url: '/about',
    label: 'About'
  },
};
