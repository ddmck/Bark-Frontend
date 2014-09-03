var resolve = function(file) {
  return __dirname + '/src/js/lib/' + file + '.js';
};

module.exports = 
  {
    files: [
      resolve('jquery-2.1.1'),
      resolve('underscore'),
      resolve('backbone')
      ]
  }