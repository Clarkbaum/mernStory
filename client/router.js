import React from 'react';

import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App.jsx';
import Arrived from './components/arrived.jsx';
import Leave from './components/leave.jsx';
import Stay from './components/stay.jsx';
import Chicken from './components/chicken.jsx';
import Lasagna from './components/lasagna.jsx';
import Distract from './components/distract.jsx';
import Security from './components/security.jsx';
import Check from './components/check.jsx';
import Continue from './components/Continue.jsx';
import Run from './components/run.jsx';
import Who from './components/who.jsx';
import Drink from './components/drink.jsx';
import Look from './components/look.jsx';

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
            <Route path="/arrived" component={Arrived} />
            <Route path="/leave" component={Leave} />
            <Route path="/stay" component={Stay} />
            <Route path="/chicken" component={Chicken} />
            <Route path="/lasagna" component={Lasagna} />
            <Route path="/distract" component={Distract} />
            <Route path="/security" component={Security} />
            <Route path="/check" component={Check} />
            <Route path="/continue" component={Continue} />
            <Route path="/run" component={Run} />
            <Route path="/who" component={Who} />
            <Route path="/drink" component={Drink} />
            <Route path="/look" component={Look} />
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
char2 - lady character

go to the grocery store (arrived)
  continue shopping (stay)
    chicken (chicken)
      call security (security)(2)
        run after the man (run)
          END
        check up on the women (1)
          "who was that guy"
            "not sure" END
          "would you like to grab a coffee with me?"  
            you get a date END
      try to distract the man (3)
        check up on the women (1)
    lasagna (lasagna)
      look what all the noise is about
        call security (2)
        try to distract the man (3)
      continue shopping
        END
  leave (leave)
    END
*/

