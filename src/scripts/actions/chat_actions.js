import Dispatcher from '../dispatcher/default';

export default {
  ACTIONS: {
    
    LOGIN: Dispatcher.Actions([
      'LOGIN_ATTEMPT',
      'LOGIN_SUCCESS',
      'LOGOUT'
    ]),
    
    USR: Dispatcher.Actions([
      'FETCH',
      'SUBSCRIBE',
      'UNSUBSCRIBE',
      'UPDATE'
    ]),
    
    MSG: Dispatcher.Actions([
      'SEND',
      'ADD'
    ])
    
  }
  
};