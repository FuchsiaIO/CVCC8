import { ACTIONS }    from '../actions/chat_actions';
import Dispatcher     from '../dispatcher/default';
import React          from 'react';
import UserStore      from '../stores/users_store';
import AuthStore      from '../stores/auth_store';
import Styles         from '../../styles/global';
import cStyles        from '../../styles/chat';


export default class UsersList extends React.Component {
  
  constructor() {
    super();
    UserStore.register(this);
    UserStore.subscribe();
  }
  
  componentWillMount() {
    Dispatcher.dispatch(ACTIONS.USR.FETCH);
  }
  
  render() {
    let users = UserStore.get_users();
    return (
      <div className='userlist'>
        <div id='online'>
          Users Online: {users.length}
        </div>
        <div className='userlist-container'>
          <ul className='user-list'>
            {
              users.map((user, i) => {
                return (
                  <li key={i}>
                    {user}
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
 
}