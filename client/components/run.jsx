import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Run extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      styles: props.location.state.styles,
      body: 'You decide to run after the man. He had a head start on you and manages to barrel through anyone in his way. He exists the store and turns a corner before you get out. You lost him. Good thing too, you had no plan on what you would have done even if you caught him. ',
      story: props.location.state.story + 'You decide to run after the man. He had a head start on you and manages to barrel through anyone in his way. He exists the store and turns a corner before you get out. You lost him. Good thing too, you had no plan on what you would have done even if you caught him. '
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2 style={this.state.styles.header}>
            <span style={this.state.styles.topTitle}> Run After The Man </span>
          </h2>
          <Paper style={this.state.styles.story} zDepth={2}>
            {this.state.body}
          </Paper>
          <br/>
          <h4> END </h4>
          <Link to={{ pathname: '/finalstory', state: this.state }}>
            <FlatButton 
              label="Final Story" 
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Run;