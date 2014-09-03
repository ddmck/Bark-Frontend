var Router = require('./modules/router/router');

$(document).ready(function(){
  var tokenValue = $("meta[name='csrf-token']").attr('content');
  $.ajaxSetup({
    headers: {'X-CSRF-Token': tokenValue}
  });

  var App = new Router();
  App.start();
});