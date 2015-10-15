import Dispatcher     from '../dispatcher/default';

let logged_in = false;
let events = {
  
};

export default Dispatcher.Store(events, {
  
  is_logged_in() {
    return logged_in;
  }
  
});