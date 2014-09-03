var template = require('./reward_image.handlebars');
var vent = require('../vent/vent');

module.exports = Backbone.View.extend({
  tagName: 'div',
  id: 'reward-image-container',
  template: template,
  events: {
    'click': 'removeImage'
  },
  initialize: function(){
    vent.on('displayImage', this.render, this);
  },
  render: function(){
    this.removeImage
    this.$el.html(this.template);
    return this;
  },
  removeImage: function(){
    this.$el.html('');
  }
})