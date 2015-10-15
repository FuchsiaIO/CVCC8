import { ACTIONS }    from '../actions/chat_actions';
import Dispatcher     from '../dispatcher/default';

let socket = io.connect('http://localhost:9090');
let users  = [];

let events = {

  [ACTIONS.USR.SUBSCRIBE]: (new_user) => {
    users.push(new_user);
  },
  
  [ACTIONS.USR.FETCH]: (usrs) => {
    socket.emit('get:users', function(results){
      Dispatcher.dispatch(ACTIONS.USR.UPDATE, results);
    });
  },
  
  [ACTIONS.USR.UPDATE]: (results) => {
    users = results;
  },
  
  [ACTIONS.USR.UNSUBSCRIBE]: (user_name) => {
    let index = users.indexOf(user_name);
    users.splice(index, 1);
  }

};

export default Dispatcher.Store(events, {
  
  get_users() {
    return users;
  },
  
  subscribe() {
    socket.on('user:logout', this._unsubscribe_user.bind(this));
    socket.on('user:login', this._subscribe_user.bind(this));
  },
  
  _unsubscribe_user(data) {
    Dispatcher.dispatch(ACTIONS.USR.UNSUBSCRIBE, data.name);
  },
  
  _subscribe_user(data) {
    Dispatcher.dispatch(ACTIONS.USR.SUBSCRIBE, data.name);
  }
  
});