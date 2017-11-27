import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Stay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      styles: props.location.state.styles,
      body: 'You decide to stay, you have a decent idea what you need anyway. First on your imaginary list is Chicken... but then again you had chicken 2 days ago. Maybe time for something different? Maybe Lasagna? ',
      story: props.location.state.story + 'You decide to stay, you have a decent idea what you need anyway. First on your imaginary list is Chicken... but then again you had chicken 2 days ago. Maybe time for something different? Maybe Lasagna? '
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2 style={this.state.styles.header}>
            <span style={this.state.styles.topTitle}> Guess What You Needed </span>
          </h2>
          <Paper style={this.state.styles.story} zDepth={2}>
            {this.state.body}
          </Paper>
          <br/>
          <Link to={{ pathname: '/chicken', state: this.state }}>
            <FlatButton 
              label="Chicken" 
            />
          </Link>
          <Link to={{ pathname: '/lasagna', state: this.state }}>
            <FlatButton 
              label="Lasagna" 
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Stay;