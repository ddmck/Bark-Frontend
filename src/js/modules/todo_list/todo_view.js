var template = require('./todo_item.handlebars')
module.exports = Backbone.View.extend({
  tagName: 'li',
  template: template,
  events: {
    'click p.delete': 'delete',
    'change input': 'toggleCompleted'
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    this.checkCompletion();
    return this;
  },
  initialize: function(){
    this.model.on('change', this.render, this);
    this.model.on('fetch', this.render, this);
    this.model.on('hide', this.remove, this);
    this.model.on('completed', this.lineThrough, this)
    this.model.on('uncompleted', this.unLineThrough, this)
  },
  delete: function(){
    this.model.collection.remove(this.model)
  },
  toggleCompleted: function(){
    this.model.toggleCompleted();
  },
  checkCompletion: function(){
    if (this.model.get('completed')) {
      this.lineThrough();
    }
  },
  lineThrough: function(){
    this.$el.find('.description').addClass('completed');
  },
  unLineThrough: function(){
    this.$el.find('.description').removeClass('completed');
  }
})