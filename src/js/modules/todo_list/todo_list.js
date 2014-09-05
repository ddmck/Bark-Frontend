var TodoItem = require('./todo_item');
var Vent = require('../vent/vent');

module.exports = Backbone.Collection.extend({
  url: "/todos",
  model: TodoItem,
  initialize: function(){
    this.on('remove', this.hideModel);
    Vent.on('refreshCollection', this.ping);
  },
  hideModel: function(model){
    model.trigger('hide');
    model.destroy();
  },
  ping: function(){
    console.log("Hi");
    Vent.trigger('yo');
  }
});