AccountsTemplates.configure({
  defaultLayout: 'Layout',
  defaultLayoutRegions: {
    nav: 'Nav'
  },
  defaultContentRegion: 'main'
});

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/login'
});