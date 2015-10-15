import Dispatcher     from '../dispatcher/default';
import React          from 'react';
import Styles         from '../../styles/global';

export default class LoginForm extends React.Component {
  
  render() {
    return (
      <div className="login">
          <div className="row">
              <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 login-box ">
              
                  <div id="login-logo">
                      <h3>Chat Awesome</h3>
                  </div>
                      
                  <div className="row">
                      <div className="col-md-12">
                          
                      </div>
                  </div>
      
                  <form className="form-horizontal login-inputs" role="form">
                      
                      <div className="form-group">
                          <div className="input-group">
                              <input type="text" className="form-control" placeholder="Guest" />
                          </div>
                      </div>
      
                      <div className="form-group">
                          <button type="submit" id="login-button" className="btn btn-primary">Login</button>
                      </div>
      
                  </form>
              </div>
          </div>
      </div>
    );
  }
  
};