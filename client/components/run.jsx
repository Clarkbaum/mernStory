import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Run extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      body: 'You decide to run after the man. He had a head start on you and manages to barrel through anyone in his way. He exists the store and turns a corner before you get out. You lost him. Good thing too, you had no plan on what you would have done even if you caught him.'
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2> Run After The Man </h2>
          {this.state.body}
          <br/>
          <h4> END </h4>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Run;