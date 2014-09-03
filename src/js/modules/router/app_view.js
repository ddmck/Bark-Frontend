var TodoList = require('../todo_list/todo_list');
var TodoListView = require('../todo_list/todo_list_view');
var AddTodoView = require('../todo_entry/add_todo_view.js');
var RewardImageView = require('../reward_image/reward_image_view')
module.exports = Backbone.View.extend({
  tagName: 'div',
  id: 'app',
  initialize: function(){
    this.render();
    $('.container').prepend(this.el);
  },
  render: function(){
    var reward_image = new RewardImageView()
    this.$el.append(reward_image.render().el);
    var todoList = new TodoList({});
    var input = new AddTodoView({collection: todoList });
    this.$el.append(input.el);
    
    var todoListView = new TodoListView({collection: todoList});
    todoList.fetch({update: true});
    this.$el.append(todoListView.el);
  }
})