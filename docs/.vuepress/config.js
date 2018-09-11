module.exports = {
  title      : 'ProjectHuddle',
  description: 'Developer Docs',
  themeConfig: {
    logo: 'https://wordpress-140658-536948.cloudwaysapps.com/wp-content/themes/projecthuddle/assets/img/project-huddle-dark.svg',
    displayAllHeaders: true, // Default: false
    nav              : [
      {text: 'Data Structures', link: '/data-structures/'},
      {text: 'Javascript', link: '/javascript/'},
      {text: 'Templates', link: '/templates/'},
      {text: 'Functions', link: '/functions/'},
      {text: 'Actions and Filters', link: '/actions-and-filters/'},
      // {text: 'REST API', link: '/rest-api/'},
      // {text: 'Examples', link: '/examples/'},
    ],
    sidebar          : {
      '/data-structures/': [
        '',
      ],
      '/javascript/': [
        '',
      ],
      '/templates/': [
        '',
      ],
      '/functions/': [
        '',
        'projects',
        'mockups',
        'websites',
      ],
      '/actions-and-filters/': [
        '',
      ],
      // fallback
      '/'          : [
        '',
      ],
    },
  },
};
