var methods = ['foo', 'bar', 'baz'];

Template.Methods.events({
  'click button.all': function (e, tpl) {
    methods.forEach(function (methodName) {
      callMethod(methodName);
    });
  }
});

Template.Methods.helpers({
  methodNames: function () {
    return methods;
  }
});

methods.forEach(function(methodName) {
  Session.setDefault(methodName, false);
});
