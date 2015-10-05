Template.method.events({
  'click button.single': function (e, tpl) {
    console.log(this, tpl);
    var methodName = tpl.data;
    callMethod(methodName);
  }
});

Template.method.helpers({
  isLoading: function(){
    return Session.get(this.toString());
  },
  name: function() {
    return this;
  }
});

callMethod = function (methodName) {
  Session.set(methodName, true);
  console.log('%s called', methodName);

  Meteor.call(methodName, function(data, error) {
    console.log('%s responded', methodName);
    Session.set(methodName, false);
  });
};

