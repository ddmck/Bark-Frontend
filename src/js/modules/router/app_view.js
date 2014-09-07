var TodoList = require('../todo_list/todo_list');
var TodoListView = require('../todo_list/todo_list_view');
var AddTodoView = require('../todo_entry/add_todo_view.js');
var RewardImageView = require('../reward_image/reward_image_view');
var template = require('./app.handlebars');

module.exports = Backbone.View.extend({
  tagName: 'div',
  id: 'app',
  template: template,
  initialize: function(){
    this.render();
    $('.container').prepend(this.el);
  },
  render: function(){
    this.$el.html(this.template());
    var reward_image = new RewardImageView()
    this.$el.find(".todos-container").append(reward_image.render().el);
    var todoList = new TodoList({});
    var input = new AddTodoView({collection: todoList });
    this.$el.find(".add-todo-container").append(input.el);
    
    var todoListView = new TodoListView({collection: todoList});
    todoList.fetch({update: true});
    this.$el.find('.todos-container').append("<div class='todo-list-container'></div>");
    this.$el.find(".todo-list-container").append(todoListView.el);
  }
})