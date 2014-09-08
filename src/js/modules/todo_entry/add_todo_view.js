var TodoItem = require('../todo_list/todo_item');

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'add-todo',
  template: require('./add_todo.handlebars'),
  events: {
    'submit form': "addNew",
    'keyup input': "resizeInput"
  },
  addNew: function(e){
    e.preventDefault();
    var desc = this.$el.find('input').val();
    var recurrance = this.$el.find('select').val();
    console.log(recurrance);
    if (desc) {
      var newTodo = new TodoItem({description: desc});
      newTodo.save();
      this.collection.add(newTodo);
      this.$el.find('input').val("").focus();
    } else {
      this.$el.find('input').attr('placeholder', 'Try being a little more descriptive!');
      this.$el.find('input').attr('width', '160px').attr('size', '9');
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
  resizeInput: function() {
    if (this.$el.find('input').val().length === 0){
      this.$el.find('input').attr('size', 9);
    } else {
      console.log('resizing');
      this.$el.find('input').attr('size', this.$el.find('input').val().replace(/\s+/g, '').length);
      this.$el.find('input').removeAttr('width');
    }
  }
})