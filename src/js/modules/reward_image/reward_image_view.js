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
    vent.on('displayImage', this.displayImage, this);
  },
  render: function(){
    this.$el.html('');
    return this;
  },
  removeImage: function(){
    this.$el.html('');
  },
  displayImage: function(){
    this.$el.html(this.template({image: 'puppy.jpg'}))
  }

})