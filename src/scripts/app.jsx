import { RouteHandler }   from 'react-router';
import Dispatcher         from './dispatcher/default';
import React              from 'react';              
import AuthStore          from './stores/auth_store';
import LoginForm          from './components/login_form';

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
      return <LoginForm />
    }
  }
  
};