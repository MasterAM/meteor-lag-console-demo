Template.Nav.helpers({
  subs: ['1', '2', '3'],
  subsPath: function () {
    return '/subs/' + this;
  },
  subsName: function () {
    return 'Publication ' + this;
  }
});