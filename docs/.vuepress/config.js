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
      {text: 'Data Structures', link: '/data-structures/'},
      {text: 'Javascript', link: '/javascript/'},
      {text: 'Templates', link: '/templates/'},
      {text: 'Functions', link: '/functions/'},
      {text: 'Actions and Filters', link: '/actions-and-filters/'},
      // {text: 'REST API', link: '/rest-api/'},
      // {text: 'Examples', link: '/examples/'},
    ],
    sidebar          : {
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
      '/javascript/'         : [
        '',
      ],
      '/templates/'          : [
        '',
        'underscore-templates',
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
      ],
      // fallback
      '/'                    : [
        '',
      ],
    },
  },
};
