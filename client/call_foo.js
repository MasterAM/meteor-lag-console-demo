var methods = ['foo', 'bar', 'baz'];

var configCollection = Package['alon:lag-console'].configCollection;

Template.main.events({
  'click button.all': function (e, tpl) {
    methods.forEach(function (methodName) {
      callMethod(methodName);
    });
  }
});

Template.main.helpers({
  methodNames: function () {
    return methods;
  }
});

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
  delayText: function() {
    var delayText;
    var method, defaultDelay;
    var globallyDisabled = configCollection.findOne({type: 'config', name: 'disable', level: 'base'});
    var methodDisabled = configCollection.findOne({type: 'config', name: 'disable', level: 'method'});
    if ((globallyDisabled && globallyDisabled.value) ||
        (methodDisabled && methodDisabled.value)) {
      delayText = "not delayed (disabled)";
    } else {
      method = configCollection.findOne({type: 'method', name: this.toString()});
      if (method) {
        if (method.isExcluded) {
          delayText = "not delayed (excluded)";
        } else if (typeof method.delay == "number") {
          delayText = "delayed by "+ method.delay + "ms (custom)";
        }
      }
      if (!delayText) {
        defaultDelay = configCollection.findOne({type: 'config', name: 'defaultDelay'});
        delayText = "delayed by "+ defaultDelay.value + "ms";
      }
    }
    return delayText;
  },
  name: function() {
    return this;
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
