var TodoView = require('./todo_view.js');

module.exports = Backbone.View.extend({
  tagName: 'ul',
  className: 'todo-list',
  initialize: function(){
    this.collection.on('add', this.addOne, this);
    this.collection.on('displayImage', this.displayImage, this);
  },
  render: function(){
    this.collection.forEach(this.addOne, this)
    return this;
  }, 
  addOne: function(todoItem){
    var todoView = new TodoView({model: todoItem});
    this.$el.append(todoView.render().el);
  }
});