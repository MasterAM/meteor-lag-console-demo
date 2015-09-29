var methods = ['foo', 'bar', 'baz'];
var delayData = {
  'foo' : {
    delayText: "look at settings"
  },
  'bar' : {
    delayText: "delayed by 500ms"
  },
  'baz': {
    delayText: "not delayed"
  }
};
// counter starts at 0

Template.method.helpers({
  isLoading: function(){
    return Session.get(this);
  },
  delayText: function() {
    return delayData[this].delayText;
  },
  name: function() {
    return this;
  }
});

Template.method.events({
  'click button.single': function (e, tpl) {
    console.log(this, tpl);
    var methodName = tpl.data;
    callMethod(methodName);
  }
});

Template.main.helpers({
  methodNames: function () {
    return methods;
  }
});

Template.main.events({
  'click button.all': function (e, tpl) {
    methods.forEach(function (methodName) {
      callMethod(methodName);
    });
  }
});

function callMethod(methodName) {
  Session.set(methodName, true);
  console.log('%s called', methodName);

  Meteor.call(methodName, function(data, error) {
    console.log('%s responded', methodName);
    Session.set(methodName, false);
  });
}

methods.forEach(function(methodName) {
  Session.setDefault(methodName, false);
});
