var __slice = [].slice;
var vent = _.extend({}, Backbone.Events);
var bind = vent.bind.bind(vent);


vent.bind = function() {
  var args, callback, cb, event;
  event = arguments[0], callback = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
  cb = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    console.log('caught: #{event}');
    return callback.apply(null, args);
  };
  return bind.apply(null, [event, callback].concat(__slice.call(args)));
};

vent.bind('all', function() {
  var args, e, name;
  name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  try {
    console.log('triggered:', name, 'with', JSON.stringify(args));
  } catch (_error) {
    e = _error;
    console.log('triggered:', name);
  }
});

module.exports = vent;
