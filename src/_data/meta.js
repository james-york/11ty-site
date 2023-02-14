module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: '🗦 James York\'s Home 🗧',
  siteDescription:
    'A place to learn more about James York!',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'James York', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'york@meiji.ac.jp', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#867ade', //  Manifest: defines the default theme color for the application
  themeBgColor: '#867ade', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg',
    twitterSite: '@llpjournal', // i.e. @site - twitter profile of the site
    twitterCreator: '@cheapshot', // i.e. @author -  twitter profile of the site
    mastodonProfile: 'https://mastodon.social/@cheapshot' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'My thoughts on games, language, play, and other random stuff',
    description:
      'Writing about ludic language pedagogy'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Meiji University',
    street: '1-9-1 Eifuku',
    city: 'Setagaya-ku',
    state: 'Tokyo',
    zip: '168-8555',
    mobileDisplay: '+81-3-5300-1121',
    email: 'york@meiji.ac.jp',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
