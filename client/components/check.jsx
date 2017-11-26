import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Check extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      body: ''
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2> Check Up On The Women </h2>
          {this.state.body}
          <br/>
          <Link to={{ pathname: '/security', state: this.state }}>
            <FlatButton 
              label="Call Security" 
            />
          </Link>
          <Link to={{ pathname: '/distract', state: this.state }}>
            <FlatButton 
              label="Try To Distract The Man" 
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Check;