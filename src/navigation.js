import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '#',
    },
    {
      text: 'Features',
      href: getPermalink('/#features'),      
    },
    {
      text: 'Price',
      href: getPermalink('/#pricing'),
    },
    {
      text: 'Documentation',
      href: 'https://search2ai.online/docs',
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faqs'),
    },
    {
      text: 'Privacy',
      links: [
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
  ],
  actions: [{ text: 'Try it now', href: 'https://search2ai.online/api', target: '_blank' }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://sum4all.site/twitter' },
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://sum4all.one/telegram' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://git.new/fatwang2' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(src/assets/favicons/apple-touch-icon.png)]"></span>
    Made with <a class="text-blue-600 underline dark:text-muted" href="https://astro.build/"> Astro</a> · All rights reserved.
  `,
};
