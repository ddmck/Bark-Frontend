var AppView = require('./app_view');

module.exports = Backbone.Router.extend({
  routes: { 
    "": "index"
  },
  initialize: function(){
    $('#app').html("<p>Backbone Initialized</p>");
  },
  index: function(){
    var app = new AppView();
  },
  start: function(){
    Backbone.history.start({pushState: true});
  }
});