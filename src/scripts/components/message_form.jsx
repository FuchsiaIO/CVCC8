import { ACTIONS }    from '../actions/chat_actions';
import Dispatcher     from '../dispatcher/default';
import React          from 'react';
import Styles         from '../../styles/global';

export default class MessageForm extends React.Component {
  
  send_message() {
    let message = this.refs.message.getDOMNode();
    if(message.value != ''){
      Dispatcher.dispatch(ACTIONS.MSG.SEND, message.value);
      message.value = '';
    }
  }
  
  render() {
    return (
      <div>
        <form className='message-form' onSubmit={this.send_message.bind(this)}>
          <input type="text" className='form-control message' placeholder="Send A Message...." ref='message' />
          <button type="submit" id="login-button" className="btn btn-primary send">Send</button>
        </form>
      </div>
    );
  }
   
}