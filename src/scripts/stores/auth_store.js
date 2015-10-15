import { ACTIONS }    from '../actions/chat_actions';
import Dispatcher     from '../dispatcher/default';

let logged_in = false;

let events = {

  [ACTIONS.LOGIN.LOGIN_ATTEMPT]: (e) => {
    console.log("here");
    logged_in = true;
  }

};

export default Dispatcher.Store(events, {
  
  is_logged_in() {
    return logged_in;
  }
  
});