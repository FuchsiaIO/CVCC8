import Dispatcher from '../dispatcher/default';

export default {
  ACTIONS: {
    
    MSG: Dispatcher.Actions([
      'ADD_MSG',
      'CLEAR_MSG'
    ]),
    
    CHAT: Dispatcher.Actions([
      'SEND'
    ])
    
  }
  
};