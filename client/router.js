import React from 'react';

//import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory,
  IndexRoute,
  Switch
} from 'react-router-dom';
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App.jsx';
import Page1 from './components/page1.jsx';
import Page2 from './components/page2.jsx';
import Page3 from './components/page3.jsx';

class ReactRouter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default ReactRouter;

injectTapEventPlugin();

ReactDOM.render( <ReactRouter />, document.getElementById('app'));