import Router, { Route }  from 'react-router';
import React              from 'react';
import App                from './app';

global.React = React;

let routes = (
  <Route handler={App}>
  </Route>  
)

export default Router.run(routes, function(Handler, state) {
  React.render(<Handler {...state} />, document.body);
});