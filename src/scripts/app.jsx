import { RouteHandler }   from 'react-router';
import Dispatcher         from './dispatcher/default';
import React              from 'react';              
import AuthStore          from './stores/auth_store';

/*
let socket = io.connect('http://localhost:9090');
*/
export default class ChatApp extends React.Component {

  constructor() {
    super();
    AuthStore.register(this);  
  }
  
  render() {
    if( AuthStore.is_logged_in() ){
      return (
        <div>
          <h1>Logged In.</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>This is the Chat App. Please Login.</h1>
        </div>
      );
    }
  }
  
};