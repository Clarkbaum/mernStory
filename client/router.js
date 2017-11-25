import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';

class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <Route path="/" component={App} >
            <Route path="/app" component={App} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
            <Route path="*" component={App} />
          </Route>
        </Router>
      </div>
    )
  }
}

export default Router;