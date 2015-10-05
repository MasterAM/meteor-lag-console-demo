var publications = ['pub1', 'pub2', 'pub3'];
var handler = function() {
  return this.ready();
};

publications.forEach(function (pubName) {
  Meteor.publish(pubName, handler);
});