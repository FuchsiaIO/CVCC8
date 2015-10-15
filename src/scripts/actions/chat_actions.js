import Dispatcher from '../dispatcher/default';

export default {
  ACTIONS: {
    
    LOGIN: Dispatcher.Actions([
      'LOGIN_ATTEMPT',
      'LOGIN_SUCCESS',
      'LOGOUT'
    ]),
    
    MSG: Dispatcher.Actions([
      'ADD_MSG',
      'CLEAR_MSG'
    ]),
    
    CHAT: Dispatcher.Actions([
      'SEND'
    ])
    
  }
  
};