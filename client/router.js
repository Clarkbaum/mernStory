import React from 'react';

import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';
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


/*
story flow
numbers represent the same path
char1 - main character

go to the grocery store (page1)
  continue shopping (page3)
    chicken 
      call security (2)
        run after the man
          END
        check up on the women (1)
          "who was that guy"
            "not sure" END
          "would you like to grab a coffee with me?"  
            you get a date END
      try to distract the man (3)
        check up on the women (1)
    lasagna
      look what all the noise is about
        call security (2)
        try to distract the man (3)
      continue shopping
        END
  leave (page2)
    END
*/

