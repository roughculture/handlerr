var handle = module.exports = function(cb, handler) {
  return function(err) {
    if (err) {
      if (handler) {
        handler(err);
      } else {
        if (err instanceof Error) {
          console.error(err.stack);
        } else {
          console.error(new Error(err).stack);
        }
      }
    } else {
      var args = Array.prototype.slice.call(arguments, 1);

      if (typeof cb === 'function') {
        cb(args);
      }
    }
  };
};

handle.throw = function(cb, handler) {
  return function(err) {
    if (err) {
      if (handler) {
        handler(err);
      } else {
        if (err instanceof Error) {
          throw err;
        } else {
          throw new Error(err);
        }
      }
    } else {
      var args = Array.prototype.slice.call(arguments, 1);

      if (typeof cb === 'function') {
        cb(args);
      }
    }
  };
};

handle.custom = function(handler) {
  return function(cb) {
    return handle(cb, handler);
  };
};
