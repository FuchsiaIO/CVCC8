import { RouteHandler }   from 'react-router';
import Dispatcher         from './dispatcher/default';
import React              from 'react';              
import AuthStore          from './stores/auth_store';
import LoginForm          from './components/login_form';
import UserList           from './components/users_list';
import ChatList           from './components/chat_list';
import MessageForm        from './components/message_form';

export default class ChatApp extends React.Component {

  constructor() {
    super();
    AuthStore.register(this);  
  }
  
  render() {
    if( AuthStore.is_logged_in() ){
      return (
        <div className='app'>
          <div>
            <UserList />
          </div>
          <div className='chat-container'>
            <ChatList />
          </div>
          <div>
            <MessageForm />
          </div>
        </div>
      );
    } else {
      return <LoginForm />
    }
  }
  
};