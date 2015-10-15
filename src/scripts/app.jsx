import { RouteHandler }   from 'react-router';
import Dispatcher         from './dispatcher/default';
import React              from 'react';              

/*
let socket = io.connect('http://localhost:9090');
*/
export default class ChatApp extends React.Component {

  
  render() {
    return (
      <div>
        <h1>This is the Chat App</h1>
      </div>
    )
  }
  
};