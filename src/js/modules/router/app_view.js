var TodoList = require('../todo_list/todo_list');
var TodoListView = require('../todo_list/todo_list_view');
var AddTodoView = require('../todo_entry/add_todo_view.js');
var RewardImageView = require('../reward_image/reward_image_view');
var template = require('./app.handlebars');

module.exports = Backbone.View.extend({
  tagName: 'div',
  id: 'app',
  template: template,
  events: {
    'click .sign-out': 'signOut'
  },
  initialize: function(){
    $('.notice').remove();
    this.render();
    $('.container').prepend(this.el);
  },
  render: function(){
    this.$el.html(this.template());
    var reward_image = new RewardImageView()
    $('body').append(reward_image.render().el);
    var todoList = new TodoList({});
    var input = new AddTodoView({collection: todoList });
    this.$el.find(".add-todo-container").append(input.el);
    
    var todoListView = new TodoListView({collection: todoList});
    todoList.fetch({update: true});
    console.log("aboust to append todos list view");
    this.$el.find('.todos-container').append(todoListView.el);
  }, 
  signOut: function(){
    $.ajax({
      url: '/users/sign_out',
      type: 'DELETE',
      success: function(result) {
        location.reload();
      }
    });
  }
})