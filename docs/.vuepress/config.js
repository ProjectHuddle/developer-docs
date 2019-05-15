module.exports = {
  title: "ProjectHuddle",
  description: "Developer Docs",
  themeConfig: {
    logo: "../project-huddle-dark-v2.svg",
    displayAllHeaders: true, // Default: false
    repo: "ProjectHuddle/developer-docs",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    docsDir: "docs",
    // agolia  : {
    //   apiKey: '8c34379e8159b956230b38db85762594',
    //   indexName: 'prod_DOCS'
    // },
    nav: [
      { text: "Customization", link: "/customization/" },
      { text: "Data Structures", link: "/data-structures/" },
      { text: "Functions", link: "/functions/" },
      { text: "Actions and Filters", link: "/actions-and-filters/" },
      { text: "Back To Main Site", link: "https://projecthuddle.io" }
    ],
    sidebar: {
      "/customization/": [
        "",
        "templates",
        "underscore-templates",
        "styles-and-scripts",
        "javascript",
        "extending"
      ],
      "/data-structures/": [
        "",
        "accessing-data",
        "mockup-project",
        "website-project",
        "mockup-image",
        "website-page",
        "mockup-thread",
        "website-thread",
        "text-comment",
        "approval-comment"
      ],
      "/functions/": [
        "",
        "relationships",
        "data",
        "projects",
        "mockups",
        "websites",
        "comments",
        "approval"
      ],
      "/actions-and-filters/": [
        "",
        "php-actions",
        "php-filters",
        "js-actions",
        "js-filters"
      ],
      // fallback
      "/": [""]
    }
  }
};
