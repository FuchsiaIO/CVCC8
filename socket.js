var userNames = (function () {
  var names = {};

  var claim = function (name) {
    if (!name || names[name]) {
      return false;
    } else {
      names[name] = true;
      return true;
    }
  };

  var getGuestName = function () {
    var name,
      nextUserId = 1;

    do {
      name = 'Guest ' + nextUserId;
      nextUserId += 1;
    } while (!claim(name));

    return name;
  };

  var get = function () {
    var res = [];
    for (user in names) {
      res.push(user);
    }

    return res;
  };

  var free = function (name) {
    if (names[name]) {
      delete names[name];
    }
  };

  return {
    claim: claim,
    free: free,
    get: get,
    getGuestName: getGuestName
  };
}());

module.exports = function(socket) {
  
  var name = undefined;
  
  socket.on('user:login', function (data, fn) {
    if (userNames.claim(data.name)) {
      name = data.name;
      socket.broadcast.emit('user:login', {
        name: name
      });
      fn(true);
    } else {
      fn(false);
    }
  });
  
  socket.on('get:users', function(fn){
    var data = userNames.get();
    console.log(data);
    fn(data);
  });
  
  socket.on('send:message', function (data) {
    socket.broadcast.emit('send:message', {
      name: data.name,
      text: data.text
    });
  });
  
  socket.on('disconnect', function () {
    socket.broadcast.emit('user:logout', {
      name: name
    });
    userNames.free(name);
  });
  
}