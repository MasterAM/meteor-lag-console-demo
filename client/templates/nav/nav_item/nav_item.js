var navData = new Tracker.Dependency();

Template.NavItem.helpers({
  activeClass: function () {
    navData.depend();
    if (FlowRouter.current().path === this.href) {
      return 'active';
    }
  }
});

FlowRouter.triggers.enter(function () {
  navData.changed();
});
