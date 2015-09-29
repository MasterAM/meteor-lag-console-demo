var methods = ['foo', 'bar', 'baz'];
methods.forEach(function (methodName) {
  var config = {};
  config[methodName] = function() {
    this.unblock();
    console.log('%s called', methodName);

  };
  Meteor.methods(config);
});

// console.log('going', SimpleSchema);
