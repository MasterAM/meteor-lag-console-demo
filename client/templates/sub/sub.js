Template.Sub.helpers({
  isReady: function(){
    return FlowRouter.subsReady('readyState');
  },
  publicationName: function () {
    return 'pub'+this._id;
  }
});
