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
      this.trigger('completed');
    } else {
      this.set('completed', false);
      this.trigger('uncompleted');
    }
    this.save();
  }
})