interface Network {
  href: string,
  label: string,
  icon: string,
};

export const NETWORKS: Record<string, Network> = {
  linkedIn: {
    href: 'https://www.linkedin.com/in/jackherm/',
    label: 'LinkedIn',
    icon: 'fa-linkedin-in'
  },
  github: {
    href: 'https://github.com/NoActionJaxn',
    label: 'Github',
    icon: 'fa-github'
  },
};
