var Router = require('./modules/router/router');
var Vent = require('./modules/vent/vent');
$(document).ready(function(){
  var tokenValue = $("meta[name='csrf-token']").attr('content');
  $.ajaxSetup({
    headers: {'X-CSRF-Token': tokenValue}
  });
  window.userId = $('meta[name=user_id]').attr('content');
  var App = new Router();
  App.start();
  var socket = io('http://localhost:2020');
  socket.on('updateTodos/' + window.userId, function(thing){
    Vent.trigger('refreshCollection');
  });

});