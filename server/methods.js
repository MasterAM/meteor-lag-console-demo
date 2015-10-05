var methods = ['foo', 'bar', 'baz'];
methods.forEach(function (methodName) {
  var config = {};
  config[methodName] = function() {
    console.log('%s called', methodName);
  };
  Meteor.methods(config);
});