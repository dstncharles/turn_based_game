var Dog = function (options) {
  var options = options || {};
  _.defaults(options, {
      hungry: true,
      color: 'black',
      owner: undefined
    });
  _.extend(this, options);
};

Dog.prototype += {
  status: 'normal',
  color: 'black',
  hungry: true
};

var Human = function(options) {
  var options = options || {};
  _.defaults(options, {
      cool: false,
      pet: function(target) { target.status='happy'; }
    });
  _.extend(this, options);
};

Human.prototype.feed = function(target) {
  target.hungry = false;
};
