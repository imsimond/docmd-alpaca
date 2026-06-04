process.loadEnvFile();

const src = process.env.DOCMD_SRC;

if (!src) {
  throw new Error(
    'Missing DOCMD_SRC. Define it in .env or export it before running docmd.'
  );
}

export default {
  title: 'Alpaca Issue Tracker',
  url: 'https://docs.myproject.com',
  src,
  out: 'site',
  engine: 'js',
  layout: {
    spa: true,
    header: {
      enabled: true
    },
    sidebar: {
      collapsible: true,
      defaultCollapsed: false
    },
    optionsMenu: {
      position: 'header',
      components: {
        search: true,
        themeSwitch: true
      }
    },
    footer: {
      style: 'minimal',
      content: '© 2026 Rareview®.',
      branding: true
    }
  },
  theme: {
    name: 'default',
    appearance: 'system',
    codeHighlight: true,
    customCss: ['/assets/css/custom.css']
  },
  favicon: 'assets/images/alpaca-face.svg',
  minify: true,
  autoTitleFromH1: true,
  copyCode: true,
  pageNavigation: true,
  navigation: [
    { title: 'Home', path: '/', icon: 'home' },
    {
      title: 'User Guides',
      icon: 'user',
      collapsible: true,
      children: [
        { title: 'Getting Started', path: 'user/getting-started' },
        { title: 'Project Board', path: 'user/project-board' },
        { title: 'Contextual Capture', path: 'user/contextual-capture' },
        {
          title: 'Comments And Activity',
          path: 'user/comments-and-activity'
        },
        { title: 'Notifications', path: 'user/notifications' },
        { title: 'Privacy And Data', path: 'user/privacy-and-data' }
      ]
    },
    {
      title: 'Admin Guides',
      icon: 'cog',
      collapsible: true,
      children: [
        { title: 'Configuration', path: 'admin/configuration' },
        { title: 'Email Templates', path: 'admin/email-templates' },
        {
          title: 'Roles And Permissions',
          path: 'admin/roles-and-permissions'
        }
      ]
    },
    {
      title: 'Developer Guides',
      icon: 'code',
      collapsible: true,
      children: [
        { title: 'Architecture', path: 'developer/architecture' },
        { title: 'Data Model', path: 'developer/data-model' },
        { title: 'Development', path: 'developer/development' },
        { title: 'Icon System', path: 'developer/icon-system' },
        { title: 'REST API', path: 'developer/rest-api' },
        {
          title: 'Settings And Options',
          path: 'developer/settings-options'
        }
      ]
    },
    {
      title: 'Hook And Filter Reference',
      icon: 'book',
      collapsible: true,
      children: [
        { title: 'Overview', path: 'reference/' },
        { title: 'Core And Admin Hooks', path: 'reference/core-and-admin' },
        { title: 'Daily Digest Hooks', path: 'reference/daily-digest' },
        {
          title: 'JavaScript Actions',
          path: 'reference/javascript-actions'
        },
        {
          title: 'JavaScript Filters And Browser API',
          path: 'reference/javascript-filters'
        },
        { title: 'Notification Hooks', path: 'reference/notifications' },
        {
          title: 'Private Comment Hooks',
          path: 'reference/private-comments'
        },
        { title: 'REST API Hooks', path: 'reference/rest-api' }
      ]
    }
  ],
  plugins: {
    seo: {
      defaultDescription:
        'Documentation for Alpaca Issue Tracker, a WordPress-native issue tracker for bug reports, QA feedback, and project work inside wp-admin.'
    }
  }
};