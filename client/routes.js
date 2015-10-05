FlowRouter.route('/subs/:_id', {
  subscriptions: function(params) {
    this.register('readyState', Meteor.subscribe('pub'+params._id));
  },
  action: function(params) {
    BlazeLayout.render('Layout', {
      nav: 'Nav',
      main: 'Sub',
      params: params
    });
  }
});

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('Layout', {
      nav: 'Nav',
      main: 'Methods'
    });
  }
});

