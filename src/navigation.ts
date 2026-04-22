import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Experience',
      href: getPermalink('/#experience'),
    },
    {
      text: 'Projects',
      href: getPermalink('/#projects'),
    },
    {
      text: 'About',
      href: getPermalink('/#about'),
    },
  ],
  actions: [{ text: 'Contact Me', href: 'mailto:example@email.com', target: '_blank' }], 
};

export const footerData = {
  links: [], 
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/sara-abodeeb/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/sara-abodeeb' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://www.linkedin.com/in/sara-abodeeb/">Sara Abodeeb</a> · All rights reserved.
  `,
};