var vent = require('../vent/vent');

module.exports = Backbone.Model.extend({
  urlRoot: "/todos",
  defaults: {
    description: "Thing to do...",
    completed: false
  },
  toggleCompleted: function(){
    if( this.get('completed') == false ){
      this.set('completed', true);
      vent.trigger('displayImage');
    } else {
      this.set('completed', false);
    }
    this.save();
  }
})