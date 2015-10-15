import { ACTIONS }    from '../actions/chat_actions';
import Dispatcher     from '../dispatcher/default';
import React          from 'react';
import MessageStore   from '../stores/message_store';

export default class ChatList extends React.Component {
  
  constructor() {
    super();
    MessageStore.register(this);
    MessageStore.subscribe();
  } 
  
  render() {
    let messages = MessageStore.get_messages();
    return (
      <div>
        <ul className='chat-messages'>
          {
            messages.map((message, i) => {
              return (
                <li className={i%2==0 ? 'odd': 'even'}>
                  <div className='user'>
                    {message.name}: 
                  </div>
                  <div className='message'>
                    {message.text}
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
  
}