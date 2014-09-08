var TodoView = require('./todo_view.js');
var Vent = require('../vent/vent');
var template = require('./todo_list.handlebars');

module.exports = Backbone.View.extend({
  tagName: 'div',
  // className: 'todo-list',
  template: template,
  initialize: function(){
    Vent.on('yo', this.prove, this)
    this.$el.append(this.template());
    this.collection.on('add', this.addOne, this);
    this.collection.on('displayImage', this.displayImage, this);
  },
  render: function(){
    this.collection.forEach(this.addOne, this);
    return this;
  },
  addOne: function(todoItem){
    var todoView = new TodoView({model: todoItem});
    console.log(todoItem);
    this.$el.find('#' + todoItem.get('recurrance') + '-list').append(todoView.render().el);
  },
  prove: function(){
    this.collection.fetch({update: true});
  }
});