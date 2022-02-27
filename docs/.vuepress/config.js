
module.exports = {
  lang: 'en-US',
  title: 'Lando',
  description: 'Lando phpMyAdmin Plugin Documentation',
  base: '/phpmyadmin/',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'icon', href: '/phpmyadmin/favicon.ico', size: 'any'}],
    ['link', {rel: 'icon', href: '/phpmyadmin/favicon.svg', type: 'image/svg+xml'}],
    ['link', {rel: 'preconnect', href: '//fonts.googleapis.com'}],
    ['link', {rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap'}],
  ],
  theme: '@lando/vuepress-theme-default-plus',
  themeConfig: {
    landoDocs: true,
    logo: '/images/icon.svg',
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'lando/phpmyadmin',
    sidebarHeader: {
      enabled: true,
      title: 'phpMyAdmin Plugin',
      icon: '/images/phpmyadminicon.png',
    },
    sidebar: [
      {
        text: 'Getting Started',
        link: '/index.html',
      },
      '/config.html',
      {
        text: 'Guides',
        collapsible: true,
        children: [
          {
            text: 'Using a custom PhpMyAdmin 4.x theme in Lando',
            link: '/phpmyadmin-themes.html',
          },
        ],
      },
      '/support.html',
      {text: 'Examples', link: 'https://github.com/lando/phpmyadmin/tree/main/examples'},
      {text: 'Release Notes', link: 'https://github.com/lando/phpmyadmin/releases'},
      '/development.html',
    ],
  },
};
