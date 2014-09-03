var TodoItem = require('../todo_list/todo_item');

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'add-todo',
  template: require('./add_todo.handlebars'),
  events: {
    'submit form': "addNew"
  },
  addNew: function(e){
    e.preventDefault();
    var desc = this.$el.find('input').val();
    if (desc) {
      var newTodo = new TodoItem({description: desc});
      newTodo.save();
      this.collection.add(newTodo);
      this.$el.find('input').val("").focus();
    } else {
      this.$el.find('input').attr('placeholder', 'Try being a little more descriptive!');
    }
  },
  initialize: function(){
    console.log("initialize add todo");
    this.render();
  },
  render: function(){
    console.log("Rendering ")
    this.$el.html(this.template());
    return this;
  },

})