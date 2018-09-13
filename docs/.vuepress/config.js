module.exports = {
  title      : 'ProjectHuddle',
  description: 'Developer Docs',
  themeConfig: {
    logo             : '../project-huddle-dark.svg',
    displayAllHeaders: true, // Default: false
    repo             : 'ProjectHuddle/developer-docs',
    editLinks        : true,
    editLinkText     : 'Help us improve this page!',
    docsDir          : 'docs',
    nav              : [
      {text: 'Customization', link: '/customization/'},
      {text: 'Data Structures', link: '/data-structures/'},
      {text: 'Functions', link: '/functions/'},
      {text: 'Actions and Filters', link: '/actions-and-filters/'},
      {text: 'Back To Main Site', link: 'https://projecthuddle.io' }
      // {text: 'REST API', link: '/rest-api/'},
      // {text: 'Examples', link: '/examples/'},
    ],
    sidebar          : {
      '/customization/'      : [
        '',
        'templates',
        'underscore-templates',
        'styles-and-scripts',
        'javascript',
        'extending',
      ],
      '/data-structures/'    : [
        '',
        'accessing-data',
        'mockup-project',
        'website-project',
        'mockup-image',
        'website-page',
        'mockup-thread',
        'website-thread',
        'text-comment',
        'approval-comment',
      ],
      '/functions/'          : [
        '',
        'relationships',
        'data',
        'projects',
        'mockups',
        'websites',
        'comments',
      ],
      '/actions-and-filters/': [
        '',
        'php-actions',
        'php-filters',
        'js-actions',
        'js-filters',
      ],
      // fallback
      '/'                    : [
        '',
      ],
    },
  },
};
