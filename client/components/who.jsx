import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Who extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      body: props.location.state.char2 + ' thinks about your question. "not sure" she replies.'
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2> Who Was That Guy? </h2>
          {this.state.body}
          <br/>
          <h4> END </h4>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Who;