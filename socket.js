
module.exports = function(socket) {

/*
  var redis = require('redis');
  var redis_client = redis.createClient();
  redis_client.select(8);
  
  console.log("Socket Connection Recieved!");
  
  redis_client.on('connect', function(){
    console.log("Redis Client Connected!");
  });
*/
  /*redis_client.zadd('schedule','1444624741','{"retry":"false","queue":"wordpress","class":"UpdatePostWorker","args":[2310386]}');
    */
  
  socket.emit('init', {
    'debug': 'Connected'
  });
  
  socket.on('test', function(){
    console.log("Testing");
    socket.broadcast.emit('test',{
      status: "Debugging"
    });
  });
}