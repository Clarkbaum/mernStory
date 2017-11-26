import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Security extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      body: 'You dicide to call security since thats one big fella. You yell out for some help which spooks the man. He decides to bolt for the door.'
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2> Call Security </h2>
          {this.state.body}
          <br/>
          <Link to={{ pathname: '/run', state: this.state }}>
            <FlatButton 
              label="Run After The Man" 
            />
          </Link>
          <Link to={{ pathname: '/check', state: this.state }}>
            <FlatButton 
              label="Check Up On The Women" 
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Security;