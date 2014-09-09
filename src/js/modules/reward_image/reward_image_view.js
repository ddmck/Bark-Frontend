var template = require('./reward_image.handlebars');
var vent = require('../vent/vent');

module.exports = Backbone.View.extend({
  tagName: 'div',
  id: 'reward-image-container',
  template: template,
  events: {
    'click img': 'removeImage',
    'click .close': 'removeImage',
    'click .outbound': 'goToBarkBuddy'
  },
  initialize: function(){
    vent.on('displayImage', this.displayImage, this);
  },
  render: function(){
    this.$el.html('');
    return this;
  },
  removeImage: function(){
    this.$el.html('').removeClass('active');
  },
  displayImage: function(){
    this.$el.html(this.template({image: 'puppy.jpg'})).addClass('active');
  },
  goToBarkBuddy: function(){
    var win = window.open("https://barkbuddy.com", '_blank');
    win.focus();
  }
})