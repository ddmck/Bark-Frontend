var TodoItem = require('./todo_item');

module.exports = Backbone.Collection.extend({
  url: "/todos",
  model: TodoItem,
  initialize: function(){
    this.on('remove', this.hideModel);
  },
  hideModel: function(model){
    model.trigger('hide');
    model.destroy();
  }
});