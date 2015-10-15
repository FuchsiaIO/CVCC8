import { ACTIONS }    from '../actions/chat_actions';
import Dispatcher     from '../dispatcher/default';

let socket = io.connect('http://localhost:9090');
let logged_in = false;
let user      = false;

let events = {

  [ACTIONS.LOGIN.LOGIN_ATTEMPT]: (data) => {
    socket.emit('user:login', data, (result) => {
      if( !result ) {
        alert("Username taken.");
      } else {
        Dispatcher.dispatch(ACTIONS.LOGIN.LOGIN_SUCESS, data);
      }
    });
  },
  
  [ACTIONS.LOGIN.LOGIN_SUCESS]: (data) => {
    logged_in = true;
    user      = data.name;
  }

};

export default Dispatcher.Store(events, {
  
  current_user() {
    return user;
  },
  
  is_logged_in() {
    return logged_in;
  }
  
});