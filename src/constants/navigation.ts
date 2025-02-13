import type { Link } from "../types/link";

export const NAVIGATION: Record<string, Link> = {
  home: {
    label: 'Home',
    url: '/'
  },
  work: {
    label: 'Works',
    url: '/works'
  },
  about: {
    label: 'About',
    url: '/about'
  }
};