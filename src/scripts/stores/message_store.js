import { ACTIONS }    from '../actions/chat_actions';
import Dispatcher     from '../dispatcher/default';
import AuthStore      from './auth_store';

let socket = io.connect('http://localhost:9090');
let messages = [];

let events = {

  [ACTIONS.MSG.SEND]: (message) => {
    let content = {
      name: AuthStore.current_user(),
      text: message
    };
    socket.emit('send:message', content);
    Dispatcher.dispatch(ACTIONS.MSG.ADD, content);
  },
  
  [ACTIONS.MSG.ADD]: (message_obj) => {
    if(messages.length == 50){
      messages.shift();
    }
    messages.push(message_obj);
  }

};

export default Dispatcher.Store(events, {
  
  subscribe() {
    socket.on('send:message', this._recieve_message.bind(this));
  },
  
  _recieve_message(message_obj) {
    Dispatcher.dispatch(ACTIONS.MSG.ADD, message_obj);
  },
  
  get_messages() {
    return messages;
  }
  
});