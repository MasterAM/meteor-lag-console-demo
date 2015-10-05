var configCollection = Package['alon:lag-console'].configCollection;

Template.registerHelper('delayText', function(type, name) {
  var delayText;
  var method, defaultDelay;
  var globallyDisabled = configCollection.findOne({type: 'config', name: 'disable', level: 'base'});
  var methodDisabled = configCollection.findOne({type: 'config', name: 'disable', level: type});
  if ((globallyDisabled && globallyDisabled.value) ||
    (methodDisabled && methodDisabled.value)) {
    delayText = "not delayed (disabled)";
  } else {
    method = configCollection.findOne({type: type, name: name.toString()});
    if (method) {
      if (method.isExcluded) {
        delayText = "not delayed (excluded)";
      } else if (typeof method.delay == "number") {
        delayText = "delayed for "+ method.delay + "ms (custom)";
      }
    }
    if (!delayText) {
      defaultDelay = configCollection.findOne({type: 'config', name: 'defaultDelay'});
      delayText = "delayed for " + defaultDelay.value + "ms";
    }
  }
  return delayText;
});